import './products.css'
import { useAxios } from '../../useAxios/useAxios'
import { Sidebar } from '../../components/sidebar/sidebar'
import { useFilter } from '../../filter-context/filter-context'
import {highToLow,lowToHigh,inStock,fastDelivery,priceRange,rating,categoryHandler} from '../../filter-functions/index'
import { useCart } from '../../filter-context/cart-context'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useWishlist } from '../../filter-context/wishlist-context'
import { addToCartHandler } from '../../util-functions/add-to-cart'
import { clearAll } from '../../filter-functions/clearAll'
import { useCategory } from '../../filter-context/category-context'
import { hamburgerHandler } from '../../util-functions/hamburger-handler'
import { searchHandler } from '../../filter-functions/search'
export const Products=()=>{
    const {data}=useAxios()
    const {state}=useFilter()
    const {cart,setCart,setCartCount}=useCart()
    const navigate=useNavigate()
    const data1=highToLow(data,state)
    const data2=lowToHigh(data1,state)
    const data3=inStock(data2,state)
    const data4=fastDelivery(data3,state)
    const data5=priceRange(data4,state)
    const data6=rating(data5,state)
    const data7=categoryHandler(data6,state)
    const data8=clearAll(data7,state)
    const compose=searchHandler(data8,state)

    const {setWishlist,setWishlistCount,wishlist}=useWishlist()
    const {display,setDisplay}=useCategory()

    const wishListHandler= async(product)=>{
        const wishlistToken=localStorage.getItem("user")
        if(wishlistToken)
        {
            try{
                const wishlistResponse=await axios.post('/api/user/wishlist',{
                    product
                },{
                    headers: {
                        authorization: wishlistToken,
                      },
                })
                setWishlist(wishlistResponse.data.wishlist);
                setWishlistCount(count=>count+1)
            }
            catch(error)
            {
                console.log(error);
            }
        }else{
            navigate('/login')
        }
    }


    return(
        <div>
        <div className="product-main-sidebar ">
        <div className='hamburger-wrapper' onClick={()=>hamburgerHandler(display,setDisplay)}>
                <span style={{color:"black"}} id="hamburger" className="material-icons">
                    menu
                </span>
            </div>
           <Sidebar/>
        <main className="product-main p-1">
            <div className="showing p-2">
                Showing All Products
            </div>
            <div className="all-products">
               {compose.length===0?<h1>No Products found</h1>:compose.map(product=>(
                   <div key={product.id} className="card product-cards">
                   <div className="badge-section"></div>
                   {wishlist.some(wishProduct=>wishProduct.id===product.id)?<div onClick={()=>navigate('/wishlist')}>
                   <i className="far fa-heart like-cart"></i>
                   </div>:<div onClick={()=>wishListHandler(product)}>
                   <i className="far fa-heart like-cart gray-cart"></i>
                   </div>}
                   <span className="display-none">
                       <i className="far fa-times-circle cross-icon "></i>
                   </span>
                   <div className="card-main-section">
                       <img src={product.image} className="product-img" alt=""/>
                       <main className="middle">
                           <div className="small-1">{product.title}</div>
                           <div>{product.ratings}⭐</div>
                           <div className="small-2">Rs.{product.price}/-
                           </div>
                           {product.inStock&&<div className="small-2">in stock</div>}
                           {!product.inStock&&<div className="small-2">out of stock</div>}
                           {product.fastDelivery?<div className="small-1">Fast Delivery</div>:<div className="small-1">3 days minimum</div>}
                       </main>
                       <div className="btn-section">
                           {cart.some(cartProduct=>cartProduct.id===product.id)?<button onClick={()=>navigate('/cart')} className="cart-button">go to cart</button>:<button onClick={()=>addToCartHandler(product,setCart,setCartCount,navigate)} className="cart-button">add to cart</button>}
                       </div>
                   </div>
               </div>
                ))}
                
            </div>
        </main>
        </div>
        </div>
    )
}

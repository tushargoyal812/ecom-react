import {Navbar} from '../../components/nav/nav'
import { useState } from 'react'
import './products.css'
import { useAxios } from '../../useAxios/useAxios'
import { Sidebar } from '../../components/sidebar/sidebar'
import { useFilter } from '../../filter-context/filter-context'
import {highToLow,lowToHigh,inStock,fastDelivery,priceRange,rating,categoryHandler} from '../../filter-functions/index'
import { useCart } from '../../filter-context/cart-context'
import { useAuth } from '../../filter-context/auth-context'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useWishlist } from '../../filter-context/wishlist-context'
export const Products=()=>{
    const {data}=useAxios()
    const {state}=useFilter()
    const {cart,setCart,setCartCount}=useCart()
    const {auth}=useAuth()
    const navigate=useNavigate()
    const data1=highToLow(data,state)
    const data2=lowToHigh(data1,state)
    const data3=inStock(data2,state)
    const data4=fastDelivery(data3,state)
    const data5=priceRange(data4,state)
    const data6=rating(data5,state)
    const data7=categoryHandler(data6,state)
    const compose=data7

    const [cartName,setCartName]=useState(false)
    const {setWishlist,setWishlistCount,wishlist,setIsItem}=useWishlist()

    
    
    const addToCartHandler= async (product)=>{
        const token=localStorage.getItem("user")
        console.log(cartName,"from handler");
        if(token)
        {
            try {
                const response = await axios.post(`/api/user/cart`,{
                    product
                },{
                    headers: {
                        authorization: token, // passing token as an authorization header
                      },
                }
                );
                setCart(response.data.cart)
                setCartCount(count=>count+1)
              } catch (error) {
                console.log(error);
              }
        }else{
            navigate('/login')
        }
    }


    const wishListHandler= async(product)=>{
        const wishlistToken=localStorage.getItem("user")
        console.log(product,"wishlist product");
        console.log(wishlistToken,"wishlist token");
        try{
            const wishlistResponse=await axios.post('/api/user/wishlist',{
                product
            },{
                headers: {
                    authorization: wishlistToken, // passing token as an authorization header
                  },
            })
            setWishlist(wishlistResponse.data.wishlist);
            setWishlistCount(count=>count+1)
        }
        catch(error)
        {
            console.log(error);
        }
    }
    
    return(
        <div>
        <Navbar/>
        <div className="product-main-sidebar ">
            <Sidebar/>
        <main className="product-main p-1">
            <div>
                <span id="hamburger" className="material-icons">
                    menu
                </span>
            </div>
            <div className="showing p-2">
                Showing All Products
            </div>
            <div className="all-products">
                {compose.map(product=>(
                   <div key={product.id} className="card product-cards">
                   <div className="badge-section"></div>
                   {/* <div onClick={()=>wishListHandler(product)}>
                    {wishlist.some(wishProduct=>wishProduct.id===product.id)?<i className="far fa-heart like-cart"></i>:<i className="far fa-heart like-cart gray-cart"></i>}
                   </div> */}
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
                           {cart.some(cartProduct=>cartProduct.id===product.id)?<button onClick={()=>navigate('/cart')} className="cart-button">go to cart</button>:<button onClick={()=>addToCartHandler(product)} className="cart-button">add to cart</button>}
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
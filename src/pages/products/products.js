import {Navbar} from '../../components/nav/nav'
import './products.css'
import { useAxios } from '../../useAxios/useAxios'
import { Sidebar } from '../../components/sidebar/sidebar'
import { useFilter } from '../../filter-context/filter-context'
import { highToLow } from '../../filter-functions/high-to-low'
import {lowToHigh} from '../../filter-functions/low-to-high'
import { inStock } from '../../filter-functions/in-stock'
import { fastDelivery } from '../../filter-functions/fast-delivery'
import { priceRange } from '../../filter-functions/price-range'
import { rating } from '../../filter-functions/rating'
import { categoryHandler } from '../../filter-functions/category'
export const Products=()=>{
    const {data}=useAxios()
    const {state}=useFilter()
    
    const data1=highToLow(data,state)
    const data2=lowToHigh(data1,state)
    const data3=inStock(data2,state)
    const data4=fastDelivery(data3,state)
    const data5=priceRange(data4,state)
    const data6=rating(data5,state)
    const data7=categoryHandler(data6,state)
    const compose=data7
    // const compose=categoryHandler(rating(priceRange(fastDelivery(inStock(lowToHigh(highToLow(data,state),state),state),state),state),state),state)
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
                {compose.map(item=>(
                   <div key={item.id} className="card product-cards">
                   <div className="badge-section"></div>
                   <i className="far fa-heart like-cart gray-cart"></i>
                   <span className="display-none">
                       <i className="far fa-times-circle cross-icon "></i>
                   </span>
                   <div className="card-main-section">
                       <img src={item.image} className="product-img" alt=""/>
                       <main className="middle">
                           <div className="small-1">{item.title}</div>
                           <div>{item.ratings}⭐</div>
                           <div className="small-2">Rs.{item.price}/-
                           </div>
                           {item.inStock&&<div className="small-2">in stock</div>}
                           {!item.inStock&&<div className="small-2">out of stock</div>}
                           {item.fastDelivery?<div className="small-1">Fast Delivery</div>:<div className="small-1">3 days minimum</div>}
                           {/* {item.Android?<div className="small-1">android</div>:<div className="small-1">IOS</div>} */}
                       </main>
                       <div className="btn-section">
                           <button className="cart-button">
                               Add to cart
                           </button>
                       </div>
                       <div className="btn-section">
                           <button className="cart-button">
                               Add to wishlist
                           </button>
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
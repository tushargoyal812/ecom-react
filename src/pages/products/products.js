import {Navbar} from '../../components/nav/nav'
import './products.css'
import { useAxios } from '../../useAxios/useAxios'
import { Sidebar } from '../../components/sidebar/sidebar'
export const Products=()=>{
    const {data}=useAxios()
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
                {data.map(item=>(
                   <div className="card product-cards">
                   <div className="badge-section"></div>
                   <i className="far fa-heart like-cart gray-cart"></i>
                   {/* <span className="badge-best-seller">Best seller</span> */}
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
                       </main>
                       <div className="btn-section">
                           <button className="cart-button">
                               Add to cart
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
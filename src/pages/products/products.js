import {Navbar} from '../../components/nav/nav'
import './products.css'
import { useAxios } from '../../useAxios/useAxios'
import { Sidebar } from '../../components/sidebar/sidebar'
export const Products=()=>{
    const {data}=useAxios()
    return(
        <div>
        <Navbar/>
        <div class="product-main-sidebar ">
            <Sidebar/>
        <main class="product-main p-1">
            <div>
                <span id="hamburger" class="material-icons">
                    menu
                </span>
            </div>
            <div class="showing p-2">
                Showing All Products
            </div>
           
            <div class="all-products">
                {data.map(item=>(
                   <div class="card product-cards">
                   <div class="badge-section"></div>
                   <i class="far fa-heart like-cart gray-cart"></i>
                   {/* <span class="badge-best-seller">Best seller</span> */}
                   <span class="display-none">
                       <i class="far fa-times-circle cross-icon "></i>
                   </span>
                   <div class="card-main-section">
                       <img src={item.image} class="product-img" alt=""/>
                       <main class="middle">
                           <div class="small-1">{item.title}</div>
                           <div>{item.ratings}⭐</div>
                           <div class="small-2">Rs.{item.price}/-
                           </div>
                           {item.inStock&&<div class="small-2">in stock</div>}
                           {!item.inStock&&<div class="small-2">out of stock</div>}
                           {item.fastDelivery?<div class="small-1">Fast Delivery</div>:<div class="small-1">3 days minimum</div>}
                       </main>
                       <div class="btn-section">
                           <button class="cart-button">
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
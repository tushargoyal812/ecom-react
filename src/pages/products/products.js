import {Navbar} from '../../components/nav/nav'
import './products.css'
import { useAxios } from '../../useAxios/useAxios'
export const Products=()=>{
    const {data}=useAxios()
    return(
        <div>
        <Navbar/>
        <div class="product-main-sidebar ">
        <aside class="product-sidebar p-2 mt-5">
            <div class="filter p-1">
                <h2>filter</h2> <a href="">clear</a>
            </div>
            <div class="product-sort flex flex-direction-col p-1">
                <h2 class="pb-0-5">sort by</h2>
                <div class="pb-0-5">
                    <input type="radio" /><span>Price low to high</span>
                </div>
                <div>
                    <input type="radio" /><span>Price high to low</span>
                </div>
            </div>
            <div class="product-category flex flex-direction-col p-1">
                <div class="py-0-5">
                    <input type="checkbox" /><span>in stock</span>
                </div>
                <div>
                    <input type="checkbox" /><span>fast delivery</span>
                </div>
            </div>
            <div class="price p-1">
                <h2 class="">price</h2>
                <input type="range" class="p-1"/>
            </div>
            <div class="product-category flex flex-direction-col p-1">
                <h2>catrgory</h2>
                <div class="py-0-5">
                    <input type="checkbox" /><span>mens clothing</span>
                </div>
                <div>
                    <input type="checkbox" /><span>mens clothing</span>
                </div>
            </div>
            <div class="product-rating flex flex-direction-col p-1">
                <h2 class="pb-0-5">rating</h2>
                {/* <div class="pb-0-5">
                    <input type="radio" /><span>4 star and above</span>
                </div>
                <div class="pb-0-5">
                    <input type="radio" /><span>3 star and above</span>
                </div>
                <div class="pb-0-5">
                    <input type="radio" /><span>2 star and above</span>
                </div>
                <div class="pb-0-5">
                    <input type="radio" /><span>1 star and above</span>
                </div> */}
                <input type="range" class="p-1"/>
            </div>
        </aside>
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
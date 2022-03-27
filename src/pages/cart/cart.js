import { Navbar } from "../../components/nav/nav"
import './cart.css'
import mobile from '../../assets/mobile.png'
import { useCart } from "../../filter-context/cart-context"
import axios from "axios"


export const Cart=()=>{
    const {cart,setCart,setCartCount}=useCart()
    console.log(cart,"from cart");

    const removeFromCartHandler= async (product)=>{
        const token=localStorage.getItem("user")
        console.log(product._id,product.id,"product");
        try{
            const response=await axios.delete(`/api/user/cart/${product._id}`,{
                headers: {
                    authorization: token, // passing token as an authorization header
                  },
            })
            setCart(response.data.cart);
            setCartCount(cartCount=>cartCount-1)
            console.log(response);
        }catch(error){
            console.log(error);
        }
    }

    return (
        <div>
            <Navbar/>
            <main className="cart-page centered py-5">
                {cart.map(product=>(
                    <div style={{width:"25rem"}} key={product.id} className="card flex horizontal-card margin-0">
                    <div className="card-main-section flex">
                        <img src={product.image} className="product-img horizontal-img" alt="product-image"/>
                        <main className="middle horizontal-middle pl-1 pt-0-5">
                            <p className="para">{product.title}</p>
                            <div className="small-1">iPhone 13 (256GB) - Midnight</div>
                            <div className="small-2">Rs.{product.price}/-
                            </div>
                            <div className="btn-section btn-end flex">
                                <button onClick={()=>removeFromCartHandler(product)} className="cart-button horizontal-btn ecom-bg-blue">
                                    Remove From Cart
                                </button>
                            </div>
                        </main>
                    </div>
                    </div>
                ))}
            <div className="price-details p-2">
            <h2>price details</h2>
            <hr className="my-1"/>
            <div className="flex space-between-cart">
                <div>
                    Price(1 product)
                </div>
                <div>
                    ₹78900
                </div>
            </div>
            <div className="flex space-between-cart">
                <div>
                    Discount
                </div>
                <div>
                    -₹1000
                </div>
            </div>
            <div className="flex space-between-cart">
                <div>
                    Delivery Charges
                </div>
                <div>
                    ₹100
                </div>
            </div>
            <hr className="my-1"/>
            <div className="flex space-between-cart">
                <h2>
                    Total
                </h2>
                <h2>
                    ₹78900
                </h2>
            </div>
            <hr className="my-1"/>
            <div>You will save ₹1000 on this order</div>
            <div className="order-btn flex justify-content-center">
                <button className="btn basic m-1 pd ecom-bg-blue">PLACE ORDER</button>
            </div>
            </div>
            </main>
        </div>
        )
}
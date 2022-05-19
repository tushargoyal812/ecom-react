import { Navbar } from "../../components/nav/nav"
import './cart.css'
import '../wishlist/wishlist.css'
import mobile from '../../assets/mobile.png'
import { useCart } from "../../filter-context/cart-context"
import {useWishlist} from '../../filter-context/wishlist-context'
import { addToCartHandler } from "../../util-functions/add-to-cart"
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import { qunatityHandler } from "../../util-functions/qty-handler"
import { useState } from "react"


export const Cart=()=>{
    const {cart,setCart,setCartCount}=useCart()
    const {setWishlist,setWishlistCount,wishlist}=useWishlist()
    console.log(cart,"from cart");
    const [disableBtn,setDisableBtn]=useState(false)


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
            console.log(response,"remove from cart");
        }catch(error){
            console.log(error);
        }
    }

    const moveToWishlistHandler= async (product)=>{
        const token=localStorage.getItem("user")
        if(wishlist.some(wishItem=>wishItem.id===product.id))
        {
            removeFromCartHandler(product)
        }else{
            try {
                const response=await axios.post('/api/user/wishlist',{
                    product
                },{
                  headers: {
                    authorization: token, // passing token as an authorization header
                  },
                })
                setWishlist(response.data.wishlist);
                setWishlistCount(count=>count+1)
                removeFromCartHandler(product)
              } catch (error) {
                  console.log(error);
              }
        }
    }




    let price=0
    let discount=0
    let dc=0

    cart.map(cartItem=>{
        price+=Number(cartItem.price*cartItem.qty)
        discount+=Number(cartItem.discount*cartItem.qty)
        dc+=Number(cartItem.deliveryCh)
    })

    const quantityBtnHandler=async(str,product)=>{
        setDisableBtn(true)
        if(product.qty<=1&&str==='decrement')
        {
            return;
        }
    await qunatityHandler(str,product,setCart)
    setDisableBtn(false)
    }
    
    return (
        <div>
            <Navbar/>
            {cart.length===0?<div className="showing flex justify-content-center p-1">
                <h2 className="wishlist-heading">No items in cart</h2>
            </div>:""}
            <main className="cart-page centered py-5">
                {cart.map(product=>(
                    <div id="responsive-horizontal-card" style={{width:"25rem"}} key={product.id} className="card flex horizontal-card margin-0">
                    <div className="card-main-section flex">
                        <img src={product.image} className="product-img horizontal-img" alt="product-image"/>
                        <main className="middle horizontal-middle pl-1 pt-0-5">
                            <p className="para">{product.title}</p>
                            <div>
                            <button disabled={product.qty===1||disableBtn} className="quantity px-0-5" onClick={()=>quantityBtnHandler('decrement',product)}>-</button>
                            {product.qty}
                            <button  className="quantity px-0-5" onClick={()=>quantityBtnHandler('increment',product)}>+</button>
                            </div>
                            <div className="small-2">Rs.{product.price}/-
                            </div>
                            <div className="btn-section btn-end flex">
                                <button onClick={()=>removeFromCartHandler(product)} className="cart-button horizontal-btn ecom-bg-blue">
                                    Remove From Cart
                                </button>
                            </div>
                            <div className="btn-section btn-end flex">
                                <button onClick={()=>moveToWishlistHandler(product)} className="cart-button horizontal-btn ecom-bg-blue">
                                    move to wishlist
                                </button>
                            </div>
                        </main>
                    </div>
                    </div>
                ))}
                {cart.length>0?<div className="price-details p-2">
            <h2>price details</h2>
            <hr className="my-1"/>
            <div className="flex space-between-cart">
                <div>
                    Price(1 product)
                </div>
                <div>
                    ₹ {price}
                </div>
            </div>
            <div className="flex space-between-cart">
                <div>
                    Discount
                </div>
                <div>
                    -₹ {discount}
                </div>
            </div>
            <div className="flex space-between-cart">
                <div>
                    Delivery Charges
                </div>
                <div>
                    ₹ {dc}
                </div>
            </div>
            <hr className="my-1"/>
            <div className="flex space-between-cart">
                <h2>
                    Total
                </h2>
                <h2>
                    ₹ {price-discount+dc}
                </h2>
            </div>
            <hr className="my-1"/>
            <div>You will save ₹ {discount} on this order</div>
            <div className="order-btn flex justify-content-center">
                <button className="btn basic m-1 pd ecom-bg-blue">PLACE ORDER</button>
            </div>
            </div>:""}
            </main>
        </div>
        )
}
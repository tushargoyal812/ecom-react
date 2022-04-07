import axios from "axios"
import { useState } from "react"
import { Navbar } from "../../components/nav/nav"
import { useCart } from "../../filter-context/cart-context"
import { useWishlist } from "../../filter-context/wishlist-context"
import { qunatityHandler } from "../../util-functions/qty-handler"
import './wishlist.css'

export const Wishlist=()=>{

    const {wishlist,setWishlist,setWishlistCount,isItem,setIsItem}=useWishlist()
    const {setCart,cart,setCartCount}=useCart()


    console.log(wishlist,"from wishlist");

    const removeWishlistHandler=async(product)=>{
        const token=localStorage.getItem("user")
        try{
            const response=await axios.delete(`/api/user/wishlist/${product._id}`,{
                headers: {
                    authorization: token, // passing token as an authorization header
                  },
            })
            setWishlist(response.data.wishlist);
            setWishlistCount(count=>count-1)
        }catch(error){
            console.log(error);
        }
    }


    const moveToCartHandler= async (product,id)=>{
        const token=localStorage.getItem("user")
        if(cart.some(item=>item._id===id))
        {
            console.log("if chala");
            qunatityHandler("increment",product,setCart)
            const deleteResponse=await axios.delete(`/api/user/wishlist/${product._id}`,{
                headers: {
                  authorization: token, // passing token as an authorization header
                },
              })
              setWishlist(deleteResponse.data.wishlist);
              setWishlistCount(count=>count-1)
        }else{   
        try{
            const response=await axios.post('/api/user/cart',{
                product
            },{
                headers: {
                  authorization: token, // passing token as an authorization header
                }
              })
              setCart(response.data.cart);
              setCartCount(count=>count+1)
              const deleteResponse=await axios.delete(`/api/user/wishlist/${product._id}`,{
                headers: {
                  authorization: token, // passing token as an authorization header
                },
              })
              setWishlist(deleteResponse.data.wishlist);
              setWishlistCount(count=>count-1)
        }catch(error){
            console.log(error);
        }
        }
    }

    return(
        <div>
            <Navbar/>
            <div className="showing flex justify-content-center p-1">
                <h2 className="wishlist-heading">My Wishlist</h2>
            </div>
            {wishlist.length===0?<div className="showing flex justify-content-center p-1">
                <h2 className="wishlist-heading">No items in wishlist</h2>
            </div>:""}
            {wishlist.map(product=>(
                <main key={product.id} className="wishlist-main px-5 pt-5">
                <div className="all-wishlists mt-2">
                <div className="card">
                <div className="badge-section"></div>
                <div onClick={()=>removeWishlistHandler(product)}>
                <i className="far fa-heart like-cart"></i>
                </div>
                <div className="card-main-section">
                    <img src={product.image} className="product-img" alt="" />
                    <main className="middle">
                        <div className="small-1">{product.title}</div>
                        <div className="small-2">Rs.{product.price}/-
                        </div>
                    </main>
                    <div className="btn-section">
                        <button onClick={()=>moveToCartHandler(product,product._id)} className="cart-button">
                            Move to Cart
                        </button>
                    </div>
                </div>
            </div>
            </div>
            </main>
            ))}
        </div>
    )
}
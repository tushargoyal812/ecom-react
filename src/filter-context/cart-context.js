import { createContext,useState,useContext } from "react";
import { cartReducer } from "../reducer-func/cart-reducer";


const CartContext=createContext()

const CartProvider=({children})=>{
    const [cart,setCart]=useState([])
    const [cartCount,setCartCount]=useState(0)
    return (
        <CartContext.Provider value={{cart,setCart,cartCount,setCartCount}}>{children}</CartContext.Provider>
    )
}

const useCart=()=>useContext(CartContext)

export {useCart,CartProvider}
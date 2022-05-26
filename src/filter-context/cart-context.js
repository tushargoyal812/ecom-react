import { createContext,useState,useContext } from "react";



const CartContext=createContext()

const CartProvider=({children})=>{
    const [cart,setCart]=useState([])
    const [cartCount,setCartCount]=useState(0)
    const [showToast,setShowToast]=useState(false)
    return (
        <CartContext.Provider value={{cart,setCart,cartCount,setCartCount,showToast,setShowToast}}>{children}</CartContext.Provider>
    )
}

const useCart=()=>useContext(CartContext)

export {useCart,CartProvider}
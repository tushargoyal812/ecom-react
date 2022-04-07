import axios from "axios";
import { useCart } from "../filter-context/cart-context";
import { useNavigate } from "react-router-dom";
export const addToCartHandler= async (product,setCart,setCartCount,navigate)=>{
    const token=localStorage.getItem("user")
    console.log(token);
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
import axios from "axios";
export const addToCartHandler= async (product,setCart,setCartCount,navigate)=>{
    const token=localStorage.getItem("user")
    if(token)
    {
        try {
            const response = await axios.post(`/api/user/cart`,{
                product
            },{
                headers: {
                    authorization: token,
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
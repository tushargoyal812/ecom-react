import axios from "axios"
export const qunatityHandler= async (type,product,setCart)=>{
    const token=localStorage.getItem("user")
    if(type==='increment')
    {
        try{
            const response=await axios.post(`/api/user/cart/${product._id}`,{
                action: {
                  type: type
                }
              },{
                headers: {
                  authorization: token, // passing token as an authorization header
                },
              })
              setCart(response.data.cart)
        }catch(error){
            console.log(error);
        }
    }else{
        try{
            const response=await axios.post(`/api/user/cart/${product._id}`,{
                action: {
                  type: type
                }
              },{
                headers: {
                  authorization: token, // passing token as an authorization header
                },
              })
              setCart(response.data.cart)
        }catch(error){
            console.log(error);
        } 
    }
}
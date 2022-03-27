import { createContext,useContext,useState } from "react";
import {authReducer} from '../reducer-func/auth-reducer'

const AuthContext=createContext()

const AuthProvider=({children})=>{
    const [auth,setAuth]=useState(localStorage.getItem("user")?true:false)
    console.log(auth,"from auth context");
   return(<AuthContext.Provider value={{auth,setAuth}}>{children}</AuthContext.Provider>)
}

const useAuth=()=>useContext(AuthContext)

export {AuthProvider,useAuth}
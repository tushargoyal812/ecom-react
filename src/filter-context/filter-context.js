import {createContext,useContext,useReducer} from 'react'
import { reducerFunc } from '../reducer-func/reducer-func'

const FilterContext=createContext()

const FilterProvider=({children})=>{
    const [state, dispatch] = useReducer(reducerFunc, {sorting:null,isInStock:false,fastDelivery:false,priceRange:50000,rating:5,category:{ios:false,android:false}})
   return(<FilterContext.Provider value={{state,dispatch}}>{children}</FilterContext.Provider>)
}

const useFilter=()=>useContext(FilterContext)

export {FilterProvider,useFilter}
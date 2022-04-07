import { createContext, useContext, useState } from "react";


const CategoryContext=createContext()


const CategoryProvider=({children})=>{
    const [category,setCategory]=useState([])
    const [categoryName,setCategoryName]=useState([])
    const [display,setDisplay]=useState("")
    return (<CategoryContext.Provider value={{category,setCategory,display,setDisplay}}>{children}</CategoryContext.Provider>)
}


const useCategory=()=>useContext(CategoryContext)

export {CategoryProvider,useCategory}
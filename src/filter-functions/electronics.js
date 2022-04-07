export const electronics=(data,state)=>{
    if(state.categories==="Electronics")
    {
        return [...data].filter(item=>item.category==="electronics")
    }else{
        return data
    }
}
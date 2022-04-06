export const mobile=(data,state)=>{
    if(state.categories==="Mobile")
    {
        return [...data].filter(item=>item.category==="mobile")
    }else{
        return data
    }
}
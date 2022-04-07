export const fashion=(data,state)=>{
    if(state.categories==="Fashion")
    {
        return [...data].filter(item=>item.category==="fashion")
    }else{
        return data
    }
}
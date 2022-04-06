export const home=(data,state)=>{
    if(state.categories==="Home")
    {
        return [...data].filter(item=>item.category==="home")
    }else{
        return data
    }
}
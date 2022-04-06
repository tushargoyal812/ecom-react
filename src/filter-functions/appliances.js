export const appliances=(data,state)=>{
    if(state.categories==="Appliances")
    {
        return [...data].filter(item=>item.category==="Appliances")
    }else{
        return data
    }
}
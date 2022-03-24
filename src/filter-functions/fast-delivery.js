export const fastDelivery=(data,state)=>{
    if(state.fastDelivery)
    {
        return [...data].filter(item=>item.fastDelivery)
    }else{
        return data
    }
}
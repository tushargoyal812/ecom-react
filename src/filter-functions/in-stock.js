export const inStock=(data,state)=>{
    if(state.isInStock)
    {
        return data.filter(item=>item.inStock)
    }else{
        return data
    }
}
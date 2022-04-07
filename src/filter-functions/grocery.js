export const grocery=(data,state)=>{
    if(state.categories==="Grocery")
    {
        return [...data].filter(item=>item.category==="grocery")
    }else{
        return data
    }
}
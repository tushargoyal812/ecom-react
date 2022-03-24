export const highToLow=(data,state)=>{
    if(state.sorting==='high-to-low')
    {
        return [...data].sort((a,b)=>b.price-a.price)
    }else{
        return data
    }
}
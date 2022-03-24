export const lowToHigh=(data,state)=>{
    if(state.sorting==='low-to-high')
    {
        return [...data].sort((a,b)=>a.price-b.price)
    }else{
        return data
    }
}
export const lowToHigh=(data,sorting)=>{
    if(sorting==='low-to-high')
    {
        return [...data].sort((a,b)=>a.price-b.price)
    }else{
        return data
    }
}
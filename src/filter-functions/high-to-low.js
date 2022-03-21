export const highToLow=(data,sorting)=>{
    if(sorting==='high-to-low')
    {
        return [...data].sort((a,b)=>b.price-a.price)
    }else{
        return data
    }
}
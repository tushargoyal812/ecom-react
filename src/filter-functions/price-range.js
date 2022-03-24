export const priceRange = (data, state) => {
    if(state.priceRange)
    {
        return [...data].filter(item=>item.price<=state.priceRange)
    }else{
        return data
    }
    }

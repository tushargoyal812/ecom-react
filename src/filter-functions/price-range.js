export const priceRange = (data, state) => {
    if(state.priceRange)
    {
        return [...data].filter(item=>item.price<=state.priceRange)
    }else{
        return data
    }
    }
    //    switch (state.priceRange) {
    //        case 10:  
    //           return [...data].filter(item=>item.price>10000)

    //        default:
    //            return data;
    //    }

export const reducerFunc=(state,action)=>{
    switch (action.type) {
        case 'high-to-low':
            return {...state,sorting:'high-to-low'}
        case 'low-to-high':
            return {...state,sorting:'low-to-high'}
        case 'in-stock':
            return {...state,isInStock:!state.isInStock}
        case 'fast-delivery':
            return {...state,fastDelivery:!state.fastDelivery}
        case 'price-range':
            return {...state,priceRange:action.payload}
        case 'ratings':
            return {...state,rating:action.payload}
        case 'grocery':
            return {...state,category:{...state.category,grocery:!state.category.grocery}}
        case 'mobile':
            return {...state,category:{...state.category,mobile:!state.category.mobile}}
        case 'home':
            return {...state,category:{...state.category,home:!state.category.home}}
        case 'electronics':
            return {...state,category:{...state.category,electronics:!state.category.electronics}}
        case 'Appliances':
            return {...state,category:{...state.category,Appliances:!state.category.Appliances}}
        case 'fashion':
            return {...state,category:{...state.category,fashion:!state.category.fashion}}
        case 'clear-all':
            return {...state,sorting:null,isInStock:false,fastDelivery:false,priceRange:50000,rating:5,category:{mobile:false,grocery:false,fashion:false,home:false,electronics:false,Appliances:false}}    
        default:
            return state;
    }
}
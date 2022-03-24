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
        case 'ios':
            return {...state,category:{...state.category,ios:!state.category.ios}}
        case 'android':
            return {...state,category:{...state.category,android:!state.category.android}}
        default:
            return state;
    }
}
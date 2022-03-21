export const reducerFunc=(state,action)=>{
    switch (action.type) {
        case 'high-to-low':
            return {...state,sorting:'high-to-low'}
        case 'low-to-high':
            return {...state,sorting:'low-to-high'}
        default:
            return state;
    }
}
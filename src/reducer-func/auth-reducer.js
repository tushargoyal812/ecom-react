export const authReducer=(state,action)=>{
    switch (action.type) {
        case 'login':
        return {...state,authToken:action.payload}
        default:
            return state;
    }
}   
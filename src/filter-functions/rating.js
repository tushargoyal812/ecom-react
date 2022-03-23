export const rating=(data,state)=>{
    if(state.rating){
        return [...data].filter(item=>item.ratings<=state.rating)
    }else{
        return data
    }
}
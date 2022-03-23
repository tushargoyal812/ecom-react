export const categoryHandler=(data,state)=>{
    let arr=[]
    if(!state.category.ios&&!state.category.android)
    {
        return data
    }
    if(state.category.ios)
    {
        let newArr=[...data].filter(item=>item.ios)
        arr.push(...newArr)
        console.log('ios wala',arr);
    }
    if(state.category.android)
    {
        let newArr=[...data].filter(item=>item.android)
        arr.push(...newArr)
        console.log('android wala',arr);
    }
    return arr
}
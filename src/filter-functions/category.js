export const categoryHandler=(data,state)=>{
    let categoryArr=[]
    if(!state.category.ios&&!state.category.android)
    {
        return data
    }
    if(state.category.ios)
    {
        let newArr=[...data].filter(item=>item.ios)
        categoryArr.push(...newArr)
    }
    if(state.category.android)
    {
        let newArr=[...data].filter(item=>item.android)
        categoryArr.push(...newArr)
    }
    return categoryArr
}
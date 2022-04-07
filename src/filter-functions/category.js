export const categoryHandler=(data,state)=>{
    let categoryArr=[]
    if(!state.category.grocery&&!state.category.mobile&&!state.category.home&&!state.category.electronics&&!state.category.fashion&&!state.category.Appliances)
    {
        return data
    }
    if(state.category.grocery)
    {
        let newArr=[...data].filter(item=>item.grocery)
        categoryArr.push(...newArr)
    }
    if(state.category.mobile)
    {
        let newArr=[...data].filter(item=>item.mobile)
        categoryArr.push(...newArr)
    }
    if(state.category.home)
    {
        let newArr=[...data].filter(item=>item.home)
        categoryArr.push(...newArr)
    }
    if(state.category.fashion)
    {
        let newArr=[...data].filter(item=>item.fashion)
        categoryArr.push(...newArr)
    }
    if(state.category.electronics)
    {
        let newArr=[...data].filter(item=>item.electronics)
        categoryArr.push(...newArr)
    }
    if(state.category.Appliances)
    {
        let newArr=[...data].filter(item=>item.Appliances)
        categoryArr.push(...newArr)
    }
    return categoryArr
}
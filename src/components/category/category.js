import {Link} from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { useCategory } from '../../filter-context/category-context'
import {useFilter} from '../../filter-context/filter-context'
export const Category=()=>{

    const {category,setCategory}=useCategory()

    const {state,dispatch}=useFilter()


    useEffect(()=>{
        homeCategory()
    },[])

    const homeCategory= async ()=>{
        try {
            
            const response=await axios.get('/api/categories')
            setCategory(response.data.categories);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <main className="ecom-main px-5 py-3">
        <div className="home-categories">
            {category.map(item=>(
                <div key={item.id} className="categoies p-1">
                <Link onClick={()=>dispatch({type:item.categoryName.toLowerCase()})} to="/products" className="category-links flex-col-center">
                    <img src={item.image} alt="category-image" className="category-img"/>
                    <p className="category-text p-1">{item.categoryName}</p>
                </Link>
            </div>
            ))}
        </div>
        </main>
    )
}
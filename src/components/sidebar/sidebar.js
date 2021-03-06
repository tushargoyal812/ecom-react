import { useCategory } from '../../filter-context/category-context';
import { useFilter } from '../../filter-context/filter-context';
import './sidebar.css'

export const Sidebar=()=>{

    const {state,dispatch}=useFilter()
    const {display}=useCategory()


    return(
        <aside style={{display:display}} className="product-sidebar p-2 mt-5">
            <div className="filter p-1">
                <h2>filter</h2> <button onClick={()=>dispatch({type:'clear-all'})} href="">clear</button>
            </div>
            <div className='sidebar-container'>
            <div className="product-sort flex flex-direction-col align-left p-1">
                <h2 className="pb-0-5">sort by</h2>
                <div className="pb-0-5">
                    <input checked={state.sorting==="low-to-high"} type="radio" name='sort-by-price' onChange={()=>dispatch({type:'low-to-high'})} /><span>Price low to high</span>
                </div>
                <div>
                    <input checked={state.sorting==="high-to-low"} name='sorting' name='sort-by-price' onChange={()=>dispatch({type:'high-to-low'})} type="radio" /><span>Price high to low</span>
                </div>
            </div>
            <div className="product-category flex flex-direction-col align-left p-1">
                <div className="py-0-5">
                    <input checked={state.isInStock} type="checkbox" onChange={()=>dispatch({type:'in-stock'})} /><span>in stock</span>
                </div>
                <div>
                    <input checked={state.fastDelivery} type="checkbox" onChange={()=>dispatch({type:'fast-delivery'})} /><span>fast delivery</span>
                </div>
            </div>
            <div className="price flex flex-direction-col align-left p-1">
                <h2 className="">price</h2>
                <input checked={state.priceRange!==50000} type="range" min="10000" max="100000" value={state.priceRange} onChange={(e)=>dispatch({type:'price-range',payload:e.target.value})} list="price-range" className="p-1"/>
                <datalist id="price-range">
                    <option value="10000" ></option>
                    <option value="20000" ></option>
                    <option value="30000" ></option>
                    <option value="40000" ></option>
                    <option value="50000" ></option>
                    <option value="60000" ></option>
                    <option value="70000" ></option>
                    <option value="80000" ></option>
                    <option value="90000" ></option>
                    <option value="99000" ></option>
                </datalist>
            </div>
            <div className="product-category flex flex-direction-col align-left p-1">
                <h2>catrgory</h2>
                <div className="pt-0-5">
                    <input checked={state.category.grocery} type="checkbox" onChange={()=>dispatch({type:"grocery"})} /><span>Grocery</span>
                </div>
                <div className="pt-0-5">
                    <input checked={state.category.mobile} type="checkbox" onChange={()=>dispatch({type:"mobile"})} /><span>Mobile</span>
                </div>
                <div className="pt-0-5">
                    <input checked={state.category.home} type="checkbox" onChange={()=>dispatch({type:"home"})} /><span>Home</span>
                </div>
                <div className="pt-0-5">
                    <input checked={state.category.electronics} type="checkbox" onChange={()=>dispatch({type:"electronics"})} /><span>Electronics</span>
                </div>
                <div className="pt-0-5">
                    <input checked={state.category.fashion} type="checkbox" onChange={()=>dispatch({type:"fashion"})} /><span>Fashion</span>
                </div>
                <div className="pt-0-5">
                    <input checked={state.category.Appliances} type="checkbox" onChange={()=>dispatch({type:"Appliances"})} /><span>Appliances</span>
                </div>
            </div>
            <div className="product-rating flex flex-direction-col align-left p-1">
                <h2 className="pb-0-5">rating</h2>
                <input checked={state.rating!==5} min="1" max="5" list='ratings' value={state.rating} type="range" onChange={(e)=>dispatch({type:'ratings',payload:e.target.value})} className="rating-slider p-1"/>
                <datalist id="ratings">
                    <option label="1" value="1"></option>
                    <option label="2" value="2"></option>
                    <option label="3" value="3"></option>
                    <option label="4" value="4"></option>
                    <option label="5" value="5"></option>
                </datalist>
            </div>
            </div>
        </aside>
    )
}
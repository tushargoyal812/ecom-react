import { useFilter } from '../../filter-context/filter-context';

export const Sidebar=()=>{

    const {state,dispatch}=useFilter()

    return(
        <aside className="product-sidebar p-2 mt-5">
            <div className="filter p-1">
                <h2>filter</h2> <a href="">clear</a>
            </div>
            <div className="product-sort flex flex-direction-col p-1">
                <h2 className="pb-0-5">sort by</h2>
                <div className="pb-0-5">
                    <input type="radio" name='sort-by-price' onChange={()=>dispatch({type:'low-to-high'})} /><span>Price low to high</span>
                </div>
                <div>
                    <input name='sorting' name='sort-by-price' onChange={()=>dispatch({type:'high-to-low'})} type="radio" /><span>Price high to low</span>
                </div>
            </div>
            <div className="product-category flex flex-direction-col p-1">
                <div className="py-0-5">
                    <input type="checkbox" onChange={()=>dispatch({type:'in-stock'})} /><span>in stock</span>
                </div>
                <div>
                    <input type="checkbox" onChange={()=>dispatch({type:'fast-delivery'})} /><span>fast delivery</span>
                </div>
            </div>
            <div className="price p-1">
                <h2 className="">price</h2>
                <input type="range" min="10000" max="100000" value={state.priceRange} onChange={(e)=>dispatch({type:'price-range',payload:e.target.value})} list="price-range" className="p-1"/>
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
            <div className="product-category flex flex-direction-col p-1">
                <h2>catrgory</h2>
                <div className="py-0-5">
                    <input type="checkbox" onChange={()=>dispatch({type:"ios"})} /><span>IOS</span>
                </div>
                <div>
                    <input type="checkbox" onChange={()=>dispatch({type:"android"})} /><span>Android</span>
                </div>
            </div>
            <div className="product-rating flex flex-direction-col p-1">
                <h2 className="pb-0-5">rating</h2>
                <input min="1" max="5" list='ratings' value={state.rating} type="range" onChange={(e)=>dispatch({type:'ratings',payload:e.target.value})} className="p-1"/>
                <datalist id="ratings">
                    <option value="1"></option>
                    <option value="2"></option>
                    <option value="3"></option>
                    <option value="4"></option>
                    <option value="5"></option>
                </datalist>
            </div>
        </aside>
    )
}
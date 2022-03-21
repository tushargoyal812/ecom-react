import { useFilter } from '../../filter-context/filter-context';




export const Sidebar=()=>{


    const {dispatch}=useFilter()

    return(
        <aside class="product-sidebar p-2 mt-5">
            <div class="filter p-1">
                <h2>filter</h2> <a href="">clear</a>
            </div>
            <div class="product-sort flex flex-direction-col p-1">
                <h2 class="pb-0-5">sort by</h2>
                <div class="pb-0-5">
                    <input name='sorting' onChange={()=>dispatch({type:'low-to-high'})} type="radio" /><span>Price low to high</span>
                </div>
                <div>
                    <input name='sorting' onChange={()=>dispatch({type:'high-to-low'})} type="radio" /><span>Price high to low</span>
                </div>
            </div>
            <div class="product-category flex flex-direction-col p-1">
                <div class="py-0-5">
                    <input type="checkbox" /><span>in stock</span>
                </div>
                <div>
                    <input type="checkbox" /><span>fast delivery</span>
                </div>
            </div>
            <div class="price p-1">
                <h2 class="">price</h2>
                <input type="range" class="p-1"/>
            </div>
            <div class="product-category flex flex-direction-col p-1">
                <h2>catrgory</h2>
                <div class="py-0-5">
                    <input type="checkbox" /><span>mens clothing</span>
                </div>
                <div>
                    <input type="checkbox" /><span>mens clothing</span>
                </div>
            </div>
            <div class="product-rating flex flex-direction-col p-1">
                <h2 class="pb-0-5">rating</h2>
                {/* <div class="pb-0-5">
                    <input type="radio" /><span>4 star and above</span>
                </div>
                <div class="pb-0-5">
                    <input type="radio" /><span>3 star and above</span>
                </div>
                <div class="pb-0-5">
                    <input type="radio" /><span>2 star and above</span>
                </div>
                <div class="pb-0-5">
                    <input type="radio" /><span>1 star and above</span>
                </div> */}
                <input type="range" class="p-1"/>
            </div>
        </aside>
    )
}
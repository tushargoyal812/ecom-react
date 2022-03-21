export const Sidebar=()=>{

    return(
        <aside className="product-sidebar p-2 mt-5">
            <div className="filter p-1">
                <h2>filter</h2> <a href="">clear</a>
            </div>
            <div className="product-sort flex flex-direction-col p-1">
                <h2 className="pb-0-5">sort by</h2>
                <div className="pb-0-5">
                    <input type="radio" /><span>Price low to high</span>
                </div>
                <div>
                    <input type="radio" /><span>Price high to low</span>
                </div>
            </div>
            <div className="product-category flex flex-direction-col p-1">
                <div className="py-0-5">
                    <input type="checkbox" /><span>in stock</span>
                </div>
                <div>
                    <input type="checkbox" /><span>fast delivery</span>
                </div>
            </div>
            <div className="price p-1">
                <h2 className="">price</h2>
                <input type="range" className="p-1"/>
            </div>
            <div className="product-category flex flex-direction-col p-1">
                <h2>catrgory</h2>
                <div className="py-0-5">
                    <input type="checkbox" /><span>mens clothing</span>
                </div>
                <div>
                    <input type="checkbox" /><span>mens clothing</span>
                </div>
            </div>
            <div className="product-rating flex flex-direction-col p-1">
                <h2 className="pb-0-5">rating</h2>
                {/* <div className="pb-0-5">
                    <input type="radio" /><span>4 star and above</span>
                </div>
                <div className="pb-0-5">
                    <input type="radio" /><span>3 star and above</span>
                </div>
                <div className="pb-0-5">
                    <input type="radio" /><span>2 star and above</span>
                </div>
                <div className="pb-0-5">
                    <input type="radio" /><span>1 star and above</span>
                </div> */}
                <input type="range" className="p-1"/>
            </div>
        </aside>
    )
}
import category1 from '../../assets/grocery.jpg'
import category2 from '../../assets/mobile.png'
import category3 from '../../assets/black.jpeg'
import category4 from '../../assets/headphone-1.jpeg'
import category5 from '../../assets/home.png'
import category6 from '../../assets/appliances_1.jpg'
import {Link} from 'react-router-dom'
export const Category=()=>{
    return(
        <main className="ecom-main px-5 py-3">
        <div className="home-categories">
            <div className="categoies p-1">
                <Link to="/products" className="category-links flex-col-center">
                    <img src={category1} alt="category-image" className="category-img"/>
                    <p className="category-text p-1">Grocery</p>
                </Link>
            </div>
            <div className="categoies p-1">
                <Link to='/products' className="category-links flex-col-center">
                    <img src={category2} alt="category-image" className="category-img"/>
                    <p className="category-text p-1">Mobiles</p>
                </Link>
            </div>
            <div className="categoies p-1">
                <Link to='/products' className="category-links flex-col-center">
                    <img src={category3} alt="category-image" className="category-img"/>
                    <p className="category-text p-1">Fashion</p>
                </Link>
            </div>
            <div className="categoies p-1">
                <Link to='/products' className="category-links flex-col-center">
                    <img src={category4} alt="category-image" className="category-img"/>
                    <p className="category-text p-1">Electronics</p>
                </Link>
            </div>
            <div className="categoies p-1">
                <Link to='/products' className="category-links flex-col-center">
                    <img src={category5} alt="category-image" className="category-img"/>
                    <p className="category-text p-1">Home</p>
                </Link>
            </div>
            <div className="categoies p-1">
                <Link to='/products' className="category-links flex-col-center">
                    <img src={category6} alt="category-image" className="category-img"/>
                    <p className="category-text p-1">Appliances</p>
                </Link>
            </div>
        </div>
        </main>
    )
}
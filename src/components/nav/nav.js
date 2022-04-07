import './nav.css'
import {Link} from 'react-router-dom'
import { useCart } from '../../filter-context/cart-context'
import { useAuth } from '../../filter-context/auth-context'
import { useWishlist } from '../../filter-context/wishlist-context'
import { useCategory } from '../../filter-context/category-context'
export const Navbar=()=>{

    const {cartCount}=useCart()
    const {auth,setAuth}=useAuth()
    const {wishlistCount}=useWishlist()
    const {display,setDisplay}=useCategory()

    const logoutHandler=()=>{
        localStorage.removeItem("user")
        // setAuth(false)
    }

    const hamburgerHandler=()=>{
        if(display==="block")
        {
            setDisplay("none")
        }else{
            setDisplay("block")
        }
    }

    return(
        <header className="e-com-header">
        <nav className="e-com-navbar shop-nav ecom-bg-blue">
        <div onClick={()=>hamburgerHandler()}>
                <span style={{color:"black"}} id="hamburger" className="material-icons">
                    menu
                </span>
            </div>
            <Link to="/">
                <div className="ecom-white">ShopShip</div>
            </Link>
            <ul>
                <Link className="e-com-nav-items" to="/products">Products</Link>
            </ul>
            <input type="text" className="search-input ecom-search" placeholder="search"/>
            <div className="e-com-social">
                <div className="ecom-login-container">
                    <Link to="/login">
                        {auth?<button onClick={logoutHandler} className="login-btn ecom-bg-white ecom-blue">Log out</button>:<button className="login-btn ecom-bg-white ecom-blue">Login</button>}
                    </Link>
                </div>
                <Link to="/wishlist" className="e-com-nav-icons anchor-style pointer">
                    <i className="fas fa-heart heart-icon ecom-white">
                        <div className="ecom-badge">{wishlistCount}</div>
                    </i>
                </Link>
                <Link to="/cart" className="e-com-nav-icons anchor-style pointer">
                    <i className="fas fa-shopping-cart cart-icon ecom-white">
                        <div className="ecom-badge">{cartCount}</div>
                        <span className="cart-text ecom-white">cart</span>
                    </i>
                </Link>
            </div>
        </nav>
    </header>  
    )
}
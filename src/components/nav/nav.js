import './nav.css'
import {Link} from 'react-router-dom'
import { useCart } from '../../filter-context/cart-context'
import { useAuth } from '../../filter-context/auth-context'
export const Navbar=()=>{

    const {cartCount}=useCart()
    const {auth,setAuth}=useAuth()

    const logoutHandler=()=>{
        localStorage.removeItem("user")
        // setAuth(false)
    }

    return(
        <header className="e-com-header">
        <nav className="e-com-navbar shop-nav ecom-bg-blue">
            <Link to="/">
                <div className="ecom-white">ShopShip</div>
            </Link>
            <ul className="e-com-nav-items">
            </ul>
            <input type="text" className="search-input ecom-search" placeholder="search"/>
            <div className="e-com-social">
                <div className="ecom-login-container">
                    <Link to="/login">
                        {auth?<button onClick={logoutHandler} className="login-btn ecom-bg-white ecom-blue">Log out</button>:<button className="login-btn ecom-bg-white ecom-blue">Login</button>}
                    </Link>
                </div>
                <a href="/wishlist/wishlist.html" className="e-com-nav-icons anchor-style pointer">
                    <i className="fas fa-heart heart-icon ecom-white">
                        <div className="ecom-badge">4</div>
                    </i>
                </a>
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
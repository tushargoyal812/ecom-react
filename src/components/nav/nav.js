import './nav.css'
import {Link} from 'react-router-dom'
export const Navbar=()=>{

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
                    <a href="/ecom-login/ecom-login.html">
                        <button className="login-btn ecom-bg-white ecom-blue">Login</button>
                    </a>
                </div>
                <a href="/wishlist/wishlist.html" className="e-com-nav-icons anchor-style pointer">
                    <i className="fas fa-heart heart-icon ecom-white">
                        <div className="ecom-badge">4</div>
                    </i>
                </a>
                <a href="/cart/cart.html" className="e-com-nav-icons anchor-style pointer">
                    <i className="fas fa-shopping-cart cart-icon ecom-white">
                        <div className="ecom-badge">5</div>
                        <span className="cart-text ecom-white">cart</span>
                    </i>
                </a>
            </div>
        </nav>
    </header>  
    )
}
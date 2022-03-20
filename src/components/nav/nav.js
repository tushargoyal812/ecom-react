import './nav.css'
import {Link} from 'react-router-dom'
export const Navbar=()=>{

    return(
        <header class="e-com-header">
        <nav class="e-com-navbar shop-nav ecom-bg-blue">
            <Link to="/">
                <div class="ecom-white">ShopShip</div>
            </Link>
            <ul class="e-com-nav-items">
            </ul>
            <input type="text" class="search-input ecom-search" placeholder="search"/>
            <div class="e-com-social">
                <div class="ecom-login-container">
                    <a href="/ecom-login/ecom-login.html">
                        <button class="login-btn ecom-bg-white ecom-blue">Login</button>
                    </a>
                </div>
                <a href="/wishlist/wishlist.html" class="e-com-nav-icons anchor-style pointer">
                    <i class="fas fa-heart heart-icon ecom-white">
                        <div class="ecom-badge">4</div>
                    </i>
                </a>
                <a href="/cart/cart.html" class="e-com-nav-icons anchor-style pointer">
                    <i class="fas fa-shopping-cart cart-icon ecom-white">
                        <div class="ecom-badge">5</div>
                        <span class="cart-text ecom-white">cart</span>
                    </i>
                </a>
            </div>
        </nav>
    </header>  
    )
}
import './nav.css'
import {Link, useNavigate} from 'react-router-dom'
import { useCart } from '../../filter-context/cart-context'
import { useAuth } from '../../filter-context/auth-context'
import { useWishlist } from '../../filter-context/wishlist-context'
import {useFilter} from '../../filter-context/filter-context'
export const Navbar=()=>{
    
    const navigate=useNavigate()
    const {cartCount}=useCart()
    const {auth,setAuth}=useAuth()
    const {wishlistCount}=useWishlist()
    const {dispatch}=useFilter()

    const logoutHandler=()=>{
        localStorage.removeItem("user")
        setAuth(false)
    }

    function doMagic(func,delay){
        let timer;
        return function (){
            let context=this;
            let args=arguments;
            clearTimeout(timer)
            timer= setTimeout(()=>{
                func.apply(context,args)
            },delay)
        }
    }

    const getData=(e)=>{
        navigate("/products")
        dispatch({type:'search',payload:e.target.value})
    }

    const debounce=doMagic(getData,500)



    return(
        <header className="e-com-header">
        <nav className="e-com-navbar shop-nav ecom-bg-blue">
            <Link to="/">
                <div className="ecom-white">ShopCludes</div>
            </Link>
            <ul>
                <Link className="e-com-nav-items" to="/products">Products</Link>
            </ul>
            <input  type="text" onChange={debounce} className="search-input ecom-search" placeholder="search"/>
            <div className="e-com-social">
                <div className="ecom-login-container">
                    <Link to="/login">
                        {auth?<button onClick={logoutHandler} className="login-btn ecom-bg-white ecom-blue">Log out</button>:<button className="login-btn ecom-bg-white ecom-blue">Login</button>}
                    </Link>
                </div>
                <Link to={auth?"/wishlist":"/login"} className="e-com-nav-icons anchor-style pointer">
                    <i className="fas fa-heart heart-icon ecom-white">
                        {auth&&<div className="ecom-badge">{wishlistCount}</div>}
                    </i>
                </Link>
                <Link to={auth?"/cart":"/login"} className="e-com-nav-icons anchor-style pointer">
                    <i className="fas fa-shopping-cart cart-icon ecom-white">
                        {auth&&<div className="ecom-badge">{cartCount}</div>}
                        <span className="cart-text ecom-white">cart</span>
                    </i>
                </Link>
            </div>
        </nav>
    </header>  
    )
}
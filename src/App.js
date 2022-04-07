import "./App.css";
import {Home} from './pages/home/home'
import {Products} from './pages/products/products'
import {Cart} from './pages/cart/cart'
import { Login } from "./pages/login/login";
import { SignUp } from "./pages/sign-up/sign-up";
import { Wishlist } from "./pages/wishlist/wishlist";
import {Routes,Route} from 'react-router-dom'
import { FilteredCategory } from "./pages/filtered-category/filtered-category";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
      </Routes>
    </div>
  );
}

export default App;

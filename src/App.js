import "./App.css";
import {Home} from './pages/home/home'
import {Products} from './pages/products/products'
import {Cart} from './pages/cart/cart'
import { Login } from "./pages/login/login";
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;

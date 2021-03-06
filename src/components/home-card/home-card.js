import {Link} from 'react-router-dom'
import { useAxios } from '../../useAxios/useAxios'
import './home-card.css'
export const HomeCard=()=>{

const {data}=useAxios()

    return(
        <div className="bottom-card">
            {data.map(item=>(
                <Link key={item.id} to='/products' className="bottom-card-links">
                <div className="card">
                    <div className="card-main-section">
                        <img src={item.image} className="product-img" alt="product-image"/>
                        <main className="middle flex-col-center">
                            <div className="small-1">{item.title}</div>
                            <p>Best Deals</p>
                            <div>Rs.{item.price}</div>
                        </main>
                    </div>
                </div>
            </Link>    
            ))}
        </div>
    )
}
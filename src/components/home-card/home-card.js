// import axios from 'axios'
// import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import { useAxios } from '../../useAxios/useAxios'
export const HomeCard=()=>{

const {data}=useAxios()

    return(
        <div className="bottom-card">
            {data.map(item=>(
                <Link to='/products' className="bottom-card-links">
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
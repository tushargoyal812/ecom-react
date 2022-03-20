// import axios from 'axios'
// import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import { useAxios } from '../../useAxios/useAxios'
export const HomeCard=()=>{

const {data}=useAxios()

    return(
        <div class="bottom-card">
            {data.map(item=>(
                <Link to='/products' class="bottom-card-links">
                <div class="card">
                    <div class="card-main-section">
                        <img src={item.image} class="product-img" alt="product-image"/>
                        <main class="middle flex-col-center">
                            <div class="small-1">{item.title}</div>
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
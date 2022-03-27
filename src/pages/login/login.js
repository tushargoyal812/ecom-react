import axios from 'axios'
import { useEffect, useState } from 'react'
import { useAuth } from '../../filter-context/auth-context'
import './login.css'
import { useNavigate } from 'react-router-dom'
export const Login=()=>{
    const navigate=useNavigate()
    const {auth,setAuth}=useAuth()
    const [show,setShow]=useState({email: "",
    password: ""})


    const loginHandler= async ()=>{
        try{
            const response =await axios.post('api/auth/login',show)
            localStorage.setItem("user",response.data.encodedToken)
            setAuth(true)
            navigate("/")
        }catch(error){console.log(error);}
    }


    return(
        <section className="login-section centered align-items">
        <div className="login-wrapper flex flex-direction-col align-items px-3 pb-4">
            <h1 className="mb-3">Login</h1>
            <div className="pb-1">
            <label htmlFor="" className="email-label">Email address</label>
            <div>
                <input value={show.email} name='email' onChange={(e)=>setShow({...show,email:e.target.value})} type="email" className="login-input px-3"/>
            </div>
            </div>
            <div className="pb-1">
            <label htmlFor="" className="passwaord-label">Password</label>
            <div>
                <input value={show.password} name='password' onChange={(e)=>setShow({...show,password:e.target.value})} type="password" className="login-input px-3"/>
            </div>
            </div>
            <div className="flex pb-1">
                <input type="checkbox"/>
                <div className="remember">Remember me</div>
                <a className="ml-3" href="">Forgot Password?</a>
            </div>
            <div className="mb-1 flex justify-content-center">
                <button onClick={loginHandler} className="btn basic login-page-btn ecom-bg-blue">Login</button>
            </div>
            <div><a className="new-account" href="/ecom-signup/ecom-signup.html">Create New Account </a></div>
        </div>
    </section>
    )
}
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useAuth } from '../../filter-context/auth-context'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import { Sidebar } from '../../components/sidebar/sidebar'
import { Navbar } from '../../components/nav/nav'
export const Login=()=>{
    const navigate=useNavigate()
    const {auth,setAuth}=useAuth()
    const [show,setShow]=useState({email: "",
    password: ""})
    const [visible,setVisible]=useState(true)
    const [type,setType]=useState('password')


    const loginHandler= async ()=>{
        try{
            const response =await axios.post('api/auth/login',show)
            localStorage.setItem("user",response.data.encodedToken)
            setAuth(true)
            navigate("/")
        }catch(error){console.log(error);}
    }

    const showHandler=()=>{
        if(visible)
        {
            setVisible(false)
            setType("text")
        }else{
            setVisible(true)
            setType("password")
        }
    }

    const testLogin= async()=>{
        try {
            const response=await axios.post('/api/auth/login',{
                email:"adarshbalika@gmail.com",
                password:"adarshbalika"
            })
            localStorage.setItem("user",response.data.encodedToken);
            setAuth(true)
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }


    return(
        <>
        <Navbar/>
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
            <div className='password-wrapper'>
                <input value={show.password} name='password' onChange={(e)=>setShow({...show,password:e.target.value})} type={type} className="login-input px-3"/>
                {visible?<span onClick={showHandler} class="material-icons eye">visibility_off</span>:<span onClick={showHandler}class="material-icons eye">remove_red_eye</span>}
            </div>
            </div>
            <div className="flex pb-1">
                <input type="checkbox"/>
                <div className="remember">Remember me</div>
                <a className="ml-3" href="">Forgot Password?</a>
            </div>
            <div className="ecom-login-btn mb-1 flex justify-content-center">
                <div>
                <button onClick={loginHandler} className="btn basic login-page-btn ecom-bg-blue">Login</button>
                </div>
                <div>
                <button onClick={testLogin} className="btn basic login-page-btn ecom-bg-blue">Test Login</button>
                </div>
            </div>
            <div><Link className="new-account" to="/signup">Create New Account </Link></div>
        </div>
    </section>
    </>
    )
}
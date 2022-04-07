import './sign-up.css'
import { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import { Navbar } from '../../components/nav/nav'
export const SignUp=()=>{
    const navigate=useNavigate()

    const [signUpData,setSignUpData]=useState({firstName:"",lastName:"",email:"",password:""})
    const [visible,setVisible]=useState(true)
    const [type,setType]=useState('password')

    const signUpHandler= async ()=>{
        try{
            const response=await axios.post('/api/auth/signup',signUpData)
            localStorage.setItem("user",response.data.encodedToken)
            navigate('/login')
        }
        catch(error){
            console.log(error);
        }
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

    return(
        <>
        <Navbar/>
        <section className="signup-section centered align-items ">
        <div className="signup-wrapper flex flex-direction-col align-items px-3 pb-4">
            <h1 className="mb-3">Signup</h1>
            <div className="pb-1">
            <label htmlFor="" className="email-label">first name</label>
            <div>
                <input onChange={(e)=>setSignUpData({...signUpData,firstName:e.target.value})} type="text" className="signup-input px-3" />
            </div>
            </div>
            <div className="pb-1">
            <label htmlFor="" className="email-label">lastName</label>
            <div>
                <input onChange={(e)=>setSignUpData({...signUpData,lastName:e.target.value})} type="text" className="signup-input px-3" />
            </div>
            </div>
            <div className="pb-1">
            <label htmlFor="" className="email-label">Email address</label>
            <div>
                <input onChange={(e)=>setSignUpData({...signUpData,email:e.target.value})} type="email" className="signup-input px-3" />
            </div>
            </div>
            <div className="pb-1">
            <label htmlFor="" className="passwaord-label">Password</label>
            <div className='password-wrapper'>
                <input value={signUpData.password} name='password' onChange={(e)=>setSignUpData({...signUpData,password:e.target.value})} type={type} className="login-input px-3"/>
                {visible?<span onClick={showHandler} class="material-icons eye">visibility_off</span>:<span onClick={showHandler}class="material-icons eye">remove_red_eye</span>}
            </div>
            </div>
            <div className="mb-1 flex justify-content-center">
                <button onClick={signUpHandler} className="btn basic signup-page-btn ecom-bg-blue">Create New Account</button>
            </div>
            <div><Link className="new-account" to="/login">Already have an account </Link></div>
        </div>
    </section>
    </>
    )
}
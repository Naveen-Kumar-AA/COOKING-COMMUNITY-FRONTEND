import React,{useState} from 'react'
import { Button } from 'react-bootstrap'
import './Login.css' 
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Login = ()=>{

    const checkLogin = (user) => {
        axios.post('http://localhost:3001/check-user-password',user).then(
        (response) => { console.log(response.data[0]); 
            if(response.data[0])
                navigate('/Homepage'); 
            else{
                console.log("enter a valid username and password!!!")
            }
        
        }
        )
        .catch(
            (err) => {
            console.log(err)
        });
    }

    const bgImage = {
        backgroundImage : `url('/assests/shutterstock_348320018.png')`
        }
        const [email,setEmail]=useState(" ");
        const[password,setPassword]=useState(" ")
        function handleSubmit(event){
            event.preventDefault();
        }
        console.log(email,password)
        const navigate =useNavigate()
            return(
                <div className='container-fluid '>
                    <div className='split left' style={bgImage}></div>
                    <div className='split right'>
                    <form className='p-5' onSubmit={handleSubmit}>
                        <h2 className='text-center'>Login</h2>
                        <div className='formGroup w-100 p-3'>
                            <label for="email" className='form-label'>Email Address</label>
                            <input type="email" className="form-control " id ="email" placeholder="Enter your Email ID" onChange={(e)=>setEmail(e.target.value)}/>
                            <br/>
                            <label for="pswd" className="form-label">Password</label>
                            <input type="password" className="form-control" id ="pswd" placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)}/>
                            <br/>
                            <input type="checkbox" id='Remember'/>Remember me
                                <br/>
                            <Button type='submit' className='w-100 mt-3' onClick={()=> { 
                                const response = checkLogin({
                                    "username" : email,
                                    "password" : password
                            })
                            }}>Login</Button>
                            <h5 className='text-center mt-4'>Don't have an account?</h5>
                            <Button className='w-100 mt-2' onClick={()=>navigate("/Signup")}>Sign Up</Button>
                        </div>
                    </form>
                    </div>
                </div>
            );
 }

export default Login
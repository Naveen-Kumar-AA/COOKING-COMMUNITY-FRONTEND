import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import React,{useState} from 'react'
const Signup = () => {
    const bgImage = {
        backgroundImage : `url('/assests/images/shutterstock_348320018.png')`
        }
    const [fname,setFname]=useState(" ")
    const [lname,setLname]=useState(" ")
    const [phnnumber,setPhnnumber] =useState(" ")
    const [email,setEmail]=useState(" ");
    const[password,setPassword]=useState(" ")
    const [cpasswd,setCpasswd]=useState(" ")
    function handleSubmit(event){
        event.preventDefault();
    }
    console.log(fname,lname,phnnumber,email,password,cpasswd)
    const navigate=useNavigate()
    return (
        <div className="container-fluid">
            <div className='split left' style={bgImage}></div>
            <div className='split right'>
            <form className="p-2" onSubmit={handleSubmit}>
                <h2 className="text-center mt-2">Sign Up</h2>
                <div className="formGroup w-100 px-4">
                    <label for="fname" className="form-label ">First Name</label>
                    <input type="text" className="form-control" id="fname" placeholder="Enter your first name" onChange={(e)=>setFname(e.target.value)}/>
                    <label for="lname" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lname" placeholder="Enter your last name" onChange={(e)=>setLname(e.target.value)}/>
                    <label for="phnnumber" className="form-label">Phone Number</label>
                    <input type="number" className="form-control" placeholder="Enter your phone number" onChange={(e)=>setPhnnumber(e.target.value)}/>
                    <label for="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
                    <label for="pswd" className="form-label">Password</label>
                    <input type="password" className="form-control" id="pswd" placeholder="Type your password" onChange={(e)=>setPassword(e.target.value)}/>
                    <label for="pswd" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="pswd" placeholder="Re-type your password" onChange={(e)=>setCpasswd(e.target.value)}/>
                    <Button type='submit' className='w-50 mx-5 mt-3' onClick={()=>navigate('/')}>Create Account</Button>
                </div>
            </form>
            </div>
        </div>
    );
}

export default Signup
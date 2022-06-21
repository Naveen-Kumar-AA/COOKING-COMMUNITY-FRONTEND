import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import axios from 'axios'
const SignUp = () => {
    const doSignUp = (user) => {
        if (user.password === user.C_password) {
            axios.post('http://localhost:3001/do-signup', user).then(
                (response) => {
                    console.log(response.data)
                    if (response.data)
                        navigate('/')
                    else
                        console.log("cannot create account")
                }).catch((err) => {
                    console.log(err)
                })
        }
        else {
            console.log("passwords do not match!!!")
        }
    }
    const bgImage = {
        backgroundImage: `url('/assests/shutterstock_348320018.png')`
    }
    const [username, setUsername] = useState(" ")
    const [fname, setFname] = useState(" ")
    const [lname, setLname] = useState(" ")
    const [phnnumber, setPhnnumber] = useState(" ")
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ")
    const [cpasswd, setCpasswd] = useState(" ")
    function handleSubmit(event) {
        event.preventDefault();
    }
    console.log(username, fname, lname, phnnumber, email, password, cpasswd)
    const navigate = useNavigate()
    return (
        <div className="container-fluid">
            <div className='split left' style={bgImage}></div>
            <div className='split right'>
                <form className="p-2" onSubmit={handleSubmit}>
                    <h2 className="text-center mt-2">Sign Up</h2>
                    <div className="formGroup w-100 px-4">
                        <label for="u_name" className='form-label'>User Name</label>
                        <input type='text' className='form-control' id='u_name' placeholder="Enter a username"  onChange={(e) => setUsername(e.target.value)} />
                        <label for="fname" className="form-label ">First Name</label>
                        <input type="text" className="form-control" id="fname" placeholder="Enter your first name"  onChange={(e) => setFname(e.target.value)} />
                        <label for="lname" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lname" placeholder="Enter your last name" onChange={(e) => setLname(e.target.value)} />
                        <label for="phnnumber" className="form-label">Phone Number</label>
                        <input type="number" className="form-control" placeholder="Enter your phone number"  onChange={(e) => setPhnnumber(e.target.value)} />
                        <label for="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                        <label for="pswd" className="form-label">Password</label>
                        <input type="password" className="form-control" id="pswd" placeholder="Type your password"  onChange={(e) => setPassword(e.target.value)} />
                        <label for="cpswd" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="cpswd" placeholder="Re-type your password"  onChange={(e) => setCpasswd(e.target.value)} />
                        <Button type='submit' className='w-50 mx-5 mt-3' onClick={() => {
                            doSignUp({
                                'username':username,
                                'First_name' :fname,
                                'Last_name':lname,
                                'phn_number':phnnumber,
                                'email':email,
                               'password':password,
                                'C_password':cpasswd
                            })
                        }}>Create Account</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp
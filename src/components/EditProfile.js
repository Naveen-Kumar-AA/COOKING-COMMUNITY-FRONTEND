import { useNavigate } from "react-router"
import { useState, useEffect } from "react"
import axios from "axios"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Navbar } from "react-bootstrap"
import Typography from '@mui/material/Typography';

const EditProfile = () => {
    const data = sessionStorage.getItem('Username')


    const [profile_details, setProfileDetails] = useState([])
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState([])
    const [bio, setBio] = useState([])
    const [email, setEmail] = useState([])
    const [phn_no, setPhnNo] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3001/Profile/${data}`).then((result) => {
            console.log(result.data)
            console.log(result.data.first_name);
            setFirstName(result.data.first_name);
            setLastName(result.data.last_name);
            setBio(result.data.bio);
            setEmail(result.data.email);
            setPhnNo(result.data.phn_number);
            setProfileDetails(result.data)
            // console.log(profile_details.first_name)
        }).catch((err) => {
            console.log(err)
        })
    }, [])


    const navigate = useNavigate()

    // return (<div>
    //     <TextField id="outlined-basic" label="First Name" variant="outlined" />
    //     <TextField id="outlined-basic" label="Last Name" variant="outlined" />
    //     <TextField id="outlined-basic" label="Bio" variant="outlined" />
    //     <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
    //     <TextField id="outlined-basic" label="Email" variant="outlined" />
    // </div>
    // )

    const submit = () => {
        const newProfile = {
            username : data,
            first_name : firstName,
            last_name : lastName,
            bio : bio,
            email : email,
            phn_no : phn_no
        }

        axios.post('http://Localhost:3001/edit-profile', newProfile).then((response)=>{
            console.log(response);
            navigate('/Profile');
        }).catch((err)=>{
            console.log(err);
        })
    }

    return (
        <div>
            <div className='container-fluid' >
                <div className='row'>
                    <Navbar bg="primary" variant="dark">
                        <Navbar.Brand>
                            {/* <Button className='mx-2' onClick={() => navigate("/Homepage")}>
                                <svg xmlns="http://www.w3.org/2000/svg" classNameName='mx-3' width="30" height="30" fill="white" className="bi bi-house-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                                    <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                                </svg>
                            </Button> */}
                            <Button variant="contained" onClick={() => {
                                navigate("/Homepage")
                            }
                            }><svg xmlns="http://www.w3.org/2000/svg" classNameName='mx-3' width="30" height="30" fill="white" className="bi bi-house-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                                    <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                                </svg></Button>
                        </Navbar.Brand>
                    </Navbar>
                </div>
            </div>


            <div style={{
                'display': 'flex',
                // 'height': '80vh',
                'flexDirection': "column",
                'justifyContent': 'space-evenly'
            }}>
                <div style={{
                    'display': 'flex',
                    // 'height': '75vh',
                    'justifyContent': 'center',


                }}>
                    <div style={{

                        'display': 'flex',
                        'gap': '0rem',
                        'flexDirection': 'column',
                        'width': '40%',
                        'marginTop': '50px',
                        // 'height': '75vh',
                        'justifyContent': 'space-evenly'

                    }}>


                        <Typography variant="overline" display="block" gutterBottom>Edit your profile!</Typography>
                        <TextField style={{'marginTop' : '10px'}} value={firstName} id="outlined-basic" label="First Name" variant="outlined" onChange={(e)=>{setFirstName(e.target.value)}}/>
                        <TextField style={{'marginTop' : '10px'}} value={lastName} id="outlined-basic" label="Last Name" variant="outlined" onChange={(e)=>{setLastName(e.target.value)}}/>
                        <TextField style={{'marginTop' : '10px'}} value={bio} id="outlined-basic" label="Bio" variant="outlined" onChange={(e)=>{setBio(e.target.value)}}/>
                        <TextField style={{'marginTop' : '10px'}} value={email} id="outlined-basic" label="Email" variant="outlined" onChange={(e)=>{setEmail(e.target.value)}}/>
                        <TextField style={{'marginTop' : '10px'}} value={phn_no} id="outlined-basic" label="Phone Number" variant="outlined" onChange={(e)=>{setPhnNo(e.target.value)}}/>
                        <Button style={{ 'marginTop': '20px', 'marginRight': '200px', 'marginLeft': '200px' }} variant="contained" onClick={() => {
                            submit()
                        }}>Submit</Button>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default EditProfile
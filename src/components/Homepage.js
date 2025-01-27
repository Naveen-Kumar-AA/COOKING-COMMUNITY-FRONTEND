import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { Navbar, NavDropdown, Nav, Button } from "react-bootstrap"
import './Homepage.css'
import './Profile'
import axios from "axios"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Homepage = () => {
    const bgImage = {
        backgroundImage: `url('/assests/shutterstock_348320018.png')`,
        height: 400
    }

    const [searchResults, setSearchResults] = useState([])

    const [search, setSearch] = useState('')

    const Profile = () => {
        axios.get(`http://localhost:3001/profile/${data}`).then(
            (response) => {
                console.log(response.data)
                if (response.data) {
                    sessionStorage.setItem('User_name', response.data.username)
                    sessionStorage.setItem('First_name', response.data.fname)
                    sessionStorage.setItem('Last_name', response.data.lname)
                    sessionStorage.setItem('Bio', response.data.bio)
                    sessionStorage.setItem('Email', response.data.email)
                    sessionStorage.setItem('Phn_number', response.data.phn_number)
                    navigate('/Profile')
                }
            }
        ).catch((err) => {
            console.log(err)
        })
    }


    // console.log(search)
    const data = sessionStorage.getItem('Username')
    const navigate = useNavigate()

    const getReqByMeal = (meal) => {
        navigate(`/Homepage/${meal}`)
    }

    const doSearchForProfiles = (search_value) => {
        axios.get(`http://localhost:3001/search/${search_value}`).then((response) => {
            console.log(response.data);
            setSearchResults(response.data);
        }).catch((err) => {
            console.log(err)
        })
    }

    const searchRequest = () => {
        axios.get(`http://localhost:3001/search/${search}`).then((response) => {
            console.log(response.data);
            const resp = response.data.map((user_id, index) => {
                console.log(user_id.username)
                return { label: user_id.username }
            })
            console.log(resp)
            setSearchResults(resp);
        }).catch((err) => {
            console.log(err)
        })
    }


    useEffect(() => {
        searchRequest();
        // doSearchForProfiles();
    }, [search])


    return (
        <div className='container-fluid'>
            <div className='row'>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand>
                        <Button className='mx-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" classNameName='mx-3' width="30" height="30" fill="white" className="bi bi-house-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                                <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                            </svg>
                        </Button>

                        <Button className='mx-2' onClick={() => navigate('/Homepage/NewPost')}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                        </Button>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-dark-example" />
                    <Navbar.Collapse id="navbar-dark-example">
                        <Nav>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title={data}
                                menuVariant="dark"
                            >
                                <NavDropdown.Item onClick={() => {
                                    Profile()
                                }
                                }>Profile</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={() => navigate("/")}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        
                        <Autocomplete
                            style={{ 'width': '200px' }}
                            disablePortal
                            id="combo-box-demo"
                            options={searchResults}
                            onSelect={(e) => {
                                setSearch(e.target.value);
                            }}
                            renderOption={(props, option) => (
                                <li {...props} onClick={(e) => { e.preventDefault(); navigate(`/Homepage/${option.label}`); }}>{option.label}</li>
                            )}
                            renderInput={(params) => <TextField {...params} label="Search..." onChange={(e) => { setSearch(e.target.value); }} />}
                        />
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <div className='row' style={bgImage}>
                <div className='col-12'>
                    {/* <p className='text-center p-5 title'>
                        Welcome to our blog
                    </p> */}
                </div>
            </div>
            <div class="container mb-5">
                <div class="quick-searches mt-5 ms-4">Quick Searches</div>
                <div class="qs-subtitle mt-3 ms-4">Discover blogs by type of meal</div>
                <div class="row mt-3">
                    <div class="card col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 my-3 mx-auto text-center">
                        <div class="row">
                            <div class="col-6 px-0 mx-0">
                                <img src="./assests/breakfast.png" class="card-img" />
                            </div>
                            <div class="col-6 px-3 py-3">
                                <div class="card-title">Breakfast</div>
                                <div class="card-description">Start your day with
                                    exclusive breakfast
                                    options</div>
                                <Button onClick={() => { getReqByMeal('breakfast') }}>click</Button>
                            </div>
                        </div>
                    </div>
                    <div class="card col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 my-3 mx-auto text-center">
                        <div class="row">
                            <div class="col-6 px-0 mx-0">
                                <img src="./assests/lunch.png" class="card-img" />
                            </div>
                            <div class="col-6 px-3 py-3">
                                <div class="card-title">Lunch</div>
                                <div class="card-description">Start your day with
                                    exclusive breakfast
                                    options</div>
                                <Button onClick={() => navigate("/Homepage/Lunch")}>Click</Button>
                            </div>
                        </div>
                    </div>
                    <div class="card col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 my-3 mx-auto text-center">
                        <div class="row">
                            <div class="col-6 px-0 mx-0">
                                <img src="./assests/snacks.png" class="card-img" />
                            </div>
                            <div class="col-6 px-3 py-3">
                                <div class="card-title">Snacks</div>
                                <div class="card-description">Start your day with
                                    exclusive breakfast
                                    options</div>
                                <Button onClick={() => navigate("/Homepage/Snacks")}>Click</Button>
                            </div>
                        </div>
                    </div>
                    <div class="card col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 my-3 mx-auto text-center">
                        <div class="row">
                            <div class="col-6 px-0 mx-0">
                                <img src="./assests/dinner.png" class="card-img" />
                            </div>
                            <div class="col-6 px-3 py-3">
                                <div class="card-title">Dinner</div>
                                <div class="card-description">Start your day with
                                    exclusive breakfast
                                    options</div>
                                <Button onClick={() => navigate("/Homepage/Dinner")}>Click</Button>
                            </div>
                        </div>
                    </div>
                    <div class="card col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 my-3 mx-auto text-center">
                        <div class="row">
                            <div class="col-6 px-0 mx-0">
                                <img src="./assests/drinks.png" class="card-img" />
                            </div>
                            <div class="col-6 px-3 py-3">
                                <div class="card-title">Drinks</div>
                                <div class="card-description">Start your day with
                                    exclusive breakfast
                                    options</div>
                                <Button onClick={() => navigate("/Homepage/Drinks")}>Click</Button>
                            </div>
                        </div>
                    </div>
                    <div class="card col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 my-3 mx-auto text-center">
                        <div class="row">
                            <div class="col-6 px-0 mx-0">
                                <img src="./assests/nightlife.png" class="card-img" />
                            </div>
                            <div class="col-6 px-3 py-3">
                                <div class="card-title">Desserts</div>
                                <div class="card-description">Start your day with
                                    exclusive breakfast
                                    options</div>
                                <Button onClick={() => navigate("/Homepage/Desserts")}>Click</Button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Homepage
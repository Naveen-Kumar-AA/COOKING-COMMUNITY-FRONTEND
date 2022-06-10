import React, { useState } from "react"
import { useNavigate } from "react-router"
import { Navbar, NavDropdown, Nav, Button } from "react-bootstrap"
import './Homepage.css'
import './Profile'
import axios from "axios"

const Homepage = () => {
    const bgImage = {
        backgroundImage: `url('/assests/shutterstock_348320018.png')`,
        height: 400
    }
    const [arr, setArr] = useState([])
    const Profile = () => {
        axios.get(`http://localhost:3001/profile/${data}`).then(
            (response) => {
                console.log(response.data)
                if (response.data) {
                    setArr(response.data)
                    navigate('/Profile')
                }
            }
        ).catch((err) => {
            console.log(err)
        })
    }
    const [search,setSearch]=useState(" ")
    console.log(search)
    const data = sessionStorage.getItem('Username')
    const navigate = useNavigate()
    sessionStorage.setItem('User_details', arr)
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

                        <Button className='mx-2' onClick={()=>navigate('/Homepage/NewPost')}>
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
                        <div className="ms-5">
                            <div className="restaurantSelector">
                                <input className="restaurantsinput ps-5 py-3 pe-2 w-100" type="text" placeholder="Search for recipes" onChange={(e)=>setSearch(e.target.value)}/>
                                <div className="search-icon ms-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search "
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <div className='row' style={bgImage}>
                <div className='col-12'>
                    <p className='text-center p-5 title'>
                        Welcome to our blog
                    </p>
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
                                <Button onClick={() => navigate("/Homepage/Breakfast")}>click</Button>
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
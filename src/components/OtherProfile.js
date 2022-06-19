import axios from "axios";
import React, { useEffect, useState } from "react"
import { useLocation } from 'react-router-dom'
import { Navbar, Button } from "react-bootstrap"
import { useNavigate } from "react-router"


const OtherProfile = () => {
    const location = useLocation();
    const username = location.pathname.slice(10)
    const navigate = useNavigate()
    const [profileDetails, setProfileDetails] = useState({})
    const data = sessionStorage.getItem('Username')


    const sendFollow = (userid, followerid) => {
        const follow_obj = {
            userid: userid,
            followerid: followerid
        }
        axios.post(`http://Localhost:3001/do-follow`, follow_obj).then((result) => {
            console.log(result)
        }).catch((err) => {
            console.log(`Follow failed! : ${err}`)
        })
    }


    const sendUnFollow = (userid, followerid) => {
        const unfollow_obj = {
            userid: userid,
            followerid: followerid
        }
        axios.post(`http://Localhost:3001/do-unfollow`, unfollow_obj).then((result) => {
            console.log(result)
        }).catch((err) => {
            console.log(`Follow failed! : ${err}`)
        })
    }


    // useEffect(() => {
    //     axios.get(`http://localhost:3001/Profile/${data}`).then((result) => {
    //       console.log(result.data)
    //       setProfileDetails(result.data)
    //     }).catch((err) => {
    //       console.log(err)
    //     })
    //   }, [])


    useEffect(() => {
        axios.get(`http://localhost:3001/Homepage/${username}`).then((result) => {
            console.log(result.data)
            console.log(profileDetails, data);
            if (data == result.data.username) {
                navigate('/Profile');
            }
            setProfileDetails(result.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <div className='container-fluid'>
            <div className='row'>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand>
                        <Button className='mx-2' onClick={() => navigate("/Homepage")}>
                            <svg xmlns="http://www.w3.org/2000/svg" classNameName='mx-3' width="30" height="30" fill="white" className="bi bi-house-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                                <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                            </svg>
                        </Button>
                    </Navbar.Brand>
                </Navbar>
            </div>
            <div>
                <h4>Username : {profileDetails.username}</h4>
                <h4>First name : {profileDetails.first_name}</h4>
                <h4>Last name : {profileDetails.last_name}</h4>
                <h4>Bio : {profileDetails.bio}</h4>
                <h4>Email : {profileDetails.email}</h4>
                <h4>Phone number : {profileDetails.phn_number}</h4>
                <h4>Followers : {profileDetails.no_of_followers}</h4>
                <h4>Following : {profileDetails.no_of_following}</h4>
            </div>

            {profileDetails.username !== data &&
                (<div>
                    <Button onClick={() => {
                        sendFollow(username, data)
                    }}>Follow</Button>
                    <Button style={{ 'marginLeft': '10px' }} onClick={() => {
                        sendUnFollow(username, data)
                    }}>UnFollow</Button>
                </div>)
            }

        </div>
    )
}

export default OtherProfile
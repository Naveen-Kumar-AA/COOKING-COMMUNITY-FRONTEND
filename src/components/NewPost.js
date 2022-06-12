import axios from "axios"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { useState } from "react";
import { useNavigate } from "react-router"
import { Navbar } from "react-bootstrap"
import TextareaAutosize from '@mui/material/TextareaAutosize';

const NewPost = () => {
    const username = sessionStorage.getItem('Username')
    const navigate = useNavigate()


    const [title, setTitle] = useState("")
    const [Meal, setMeals] = useState("")
    const [cuisine, setCuisine] = useState("")
    const [recipe, setRecipe] = useState("")
    const [caption, setCaption] = useState("");


    const meal = [
        { label: "Breakfast" },
        { label: "Lunch" },
        { label: "Snacks" },
        { label: "Dinner" },
        { label: "Drinks" },
        { label: "Desserts" },
    ];


    const sendNewPostReq = (new_post) => {
        axios.post(`http://localhost:3001/new-post`, new_post).then((response) => {
            console.log(response)
        }).catch((err) => {
            console.log(err)
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
                        'marginTop' : '50px',
                        // 'height': '75vh',
                        'justifyContent': 'space-evenly'

                    }}>

                        <TextField style={{ 'marginTop' : '10px'}} id="outlined-basic" label="Title" variant="outlined" onChange={(box_title) => setTitle(box_title.target.value)} />
                        <Autocomplete
                            style={{ 'marginTop' : '10px'}}
                            disablePortal
                            id="combo-box-demo"
                            options={meal}

                            renderInput={(params) => <TextField {...params} label="Meal" />}
                            onChange={(event, value) => { console.log(value); setMeals(value.label) }}
                        />
                        <TextField style={{ 'marginTop' : '10px'}} id="outlined-basic" label="Cuisine" variant="outlined" onChange={(box_cuisine) => { setCuisine(box_cuisine.target.value) }} />
                        <TextareaAutosize
                            style={{ 'marginTop' : '10px', width: '100%', 'padding' : '10px'}}
                            aria-label="minimum height"
                            minRows={8}
                            placeholder="Create your Recipe here!!!"
                            onChange={(box_recipe) => {
                                setRecipe(box_recipe.target.value)
                            }}
                        />
                        <TextField  style={{ 'marginTop' : '10px'}} id="outlined-basic" label="Caption" variant="outlined" onChange={(box_caption) => setCaption(box_caption.target.value)} />
                        <Button style={{ 'marginTop' : '20px', 'marginRight' : '200px', 'marginLeft' : '200px' }} variant="contained" onClick={() => {
                            sendNewPostReq({
                                "username": username,
                                "title": title,
                                "meal": Meal,
                                "cuisine": cuisine,
                                "recipe": recipe,
                                "caption": caption
                            })
                        }}>Create new post</Button>


                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewPost

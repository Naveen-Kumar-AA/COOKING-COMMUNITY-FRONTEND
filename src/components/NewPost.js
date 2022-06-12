import axios from "axios"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { useState } from "react";



const NewPost = () => {
    const username= sessionStorage.getItem('Username')

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
        axios.post(`http://localhost:3001/new-post`,new_post).then((response)=>{
            console.log(response)
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <div style={{
            'width': '100%',
            'display': 'flex',
            'flexDirection': 'row',
            'justifyContent': 'center'
        }}>
            <div style={{
                'position': 'relative',
                'display': 'flex',
                'flexDirection': 'column',
                'width': '50%'

            }}>
                <TextField id="outlined-basic" label="Title" variant="outlined" onChange={(box_title) => setTitle(box_title.target.value)} />
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={meal}

                    renderInput={(params) => <TextField {...params} label="Meal" />}
                    onChange={(event, value) => {console.log(value); setMeals(value.label)}}
                />
                <TextField id="outlined-basic" label="Cuisine" variant="outlined" onChange ={(box_cuisine) => {setCuisine(box_cuisine.target.value)}} />

                <TextField id="outlined-basic" label="Recipe" variant="outlined" onChange={(box_recipe) => setRecipe(box_recipe.target.value)} />

                <TextField id="outlined-basic" label="Caption" variant="outlined" onChange={(box_caption) => setCaption(box_caption.target.value)} />

                <Button variant="contained" onClick={() => {
                    sendNewPostReq({
                        "username" : username,
                        "title" : title,
                        "meal" : Meal,
                        "cuisine" : cuisine,
                        "recipe" : recipe,
                        "caption" :caption
                    })
                }}>Create new post</Button>

            </div>
        </div>
    )
}

export default NewPost

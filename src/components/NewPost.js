import axios from "axios"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';




const NewPost = () => {

    const meal = [
        { label: "Breakfast" },
        { label: "Lunch" },
        { label: "Snacks" },
        { label: "Dinner" },
        { label: "Drinks" },
        { label: "Desserts" },
    ];
    return (
        <div style={{
            'width' : '100%',
            'display' : 'flex',
            'flexDirection' : 'row',
            'justifyContent' : 'center'
        }}>
            <div style={{
                'position': 'relative',
                'display': 'flex',
                'flexDirection': 'column',
                'width': '50%'

            }}>
                <TextField id="outlined-basic" label="Title" variant="outlined" />
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={meal}

                    renderInput={(params) => <TextField {...params} label="Meal" />}
                />
                <TextField id="outlined-basic" label="Cuisine" variant="outlined" />

                <TextField id="outlined-basic" label="Recipe" variant="outlined" />

                <TextField id="outlined-basic" label="Caption" variant="outlined" />

                <Button variant="contained">Create new post</Button>

            </div>
        </div>
    )
}

export default NewPost

import { useNavigate } from "react-router"
import { Navbar, Button } from "react-bootstrap"
import axios from "axios"
import { useState, useEffect } from "react"


const Snacks = () => {
  const navigate = useNavigate()
  const [search, setSearch] = useState(" ")

  const [postDetails, setPostDetails] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/snacks`).then((response) => {
      console.log(response)
      setPostDetails(response.data);
    })

  }, [])



  return (
    <div className='container-fluid'>
      <div className='row'>
        <Navbar bg="primary" variant="dark">
          <div className="mx-auto">
            <div className="restaurantSelector">
              <input className="restaurantsinput ps-5 py-3 pe-2 w-100" type="text" placeholder="Search for recipes" onChange={(e) => setSearch(e.target.value)} />
              <div className="search-icon ms-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search "
                  viewBox="0 0 16 16">
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
            </div>
          </div>
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
        {postDetails.length > 0 ? (
          postDetails.map((post, index) => (
            <div key={index}>
              {post.title}
              {post.meal}
              {post.cuisine}
              {post.recipe_content}
              {post.caption}
            </div>
          ))
        ) : (
          <div>No Posts Found!!!</div>
        )}
      </div>
      {/* {
        postDetails.map((post, index) => {
          if (post) {
            return <div key={index}>
              {post.title}
              {post.meal}
              {post.cuisine}
              {post.recipe_content}
              {post.caption}
            </div>
          }
          else {
            return <div>No posts found!!!</div>
          }
        })
      } */}


    </div >
  )
}

export default Snacks

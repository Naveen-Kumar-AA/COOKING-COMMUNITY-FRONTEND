import { Navbar ,Button} from "react-bootstrap"
import { useNavigate } from "react-router"

const Profile = () => {
  const navigate = useNavigate()
  return (
    <div className='container-fluid'>
      <div className='row'>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand>
            <Button className='mx-2' onClick={()=>navigate("/Homepage")}>
              <svg xmlns="http://www.w3.org/2000/svg" classNameName='mx-3' width="30" height="30" fill="white" className="bi bi-house-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
              </svg>
            </Button>
          </Navbar.Brand>
        </Navbar>
      </div>
    </div>
  )
}

export default Profile
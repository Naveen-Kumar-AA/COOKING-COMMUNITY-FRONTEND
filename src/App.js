
import Login from './components/Login'
import SignUp from './components/SignUp'
import Homepage from './components/Homepage'
import Profile from './components/Profile'
import Breakfast from './components/Breakfast'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

//This component is also called default /root component
// Component is a function
const App =()=>
{


  //Emits HTML (JSX) It returns HTML but under the hood it is JS
  //
  return(
      <Router>
          <Routes>
              <Route path='/' element={<Login/>}/>
              <Route path='/Signup' element={<SignUp/>}/>
              <Route path='/Homepage' element={<Homepage/>}/>
              <Route path='/Profile' element={<Profile/>}/>
              <Route path='/Homepage/Breakfast' element = {<Breakfast/>}/>
        </Routes>
      </Router> 
    );
}

export default App;

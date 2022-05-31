
import Login from './components/Login'
import Signup from './components/Signup'
import Homepage from './components/Homepage'
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
              <Route path='/Signup' element={<Signup/>}/>
              <Route path='/Homepage' element={<Homepage/>}/>
        </Routes>
      </Router> 
    );
}

export default App;

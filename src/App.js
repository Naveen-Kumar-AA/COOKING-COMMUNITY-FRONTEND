import Login from './components/Login'
import SignUp from './components/SignUp'
import Homepage from './components/Homepage'
import Profile from './components/Profile'
import Breakfast from './components/Breakfast'
import Lunch from './components/Lunch'
import Snacks from './components/Snacks'
import Drinks from './components/Drinks'
import Dinner from './components/Dinner'
import Desserts from './components/Desserts'
import NewPost from './components/NewPost'
import OtherProfile from './components/OtherProfile'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EditProfile from './components/EditProfile'


const App = () => {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Signup' element={<SignUp />} />
        <Route path='/Homepage' element={<Homepage />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Homepage/breakfast' element={<Breakfast />} />
        <Route path='/Homepage/Lunch' element={<Lunch />} />
        <Route path='/Homepage/Snacks' element={<Snacks />} />
        <Route path='/Homepage/Drinks' element={<Drinks />} />
        <Route path='/Homepage/Dinner' element={<Dinner />} />
        <Route path='/Homepage/Desserts' element={<Desserts />} />
        <Route path='/Homepage/NewPost' element={<NewPost />} />
        <Route path='/Homepage/:username' element={<OtherProfile />} />
        <Route path='/edit-profile' element={<EditProfile />} />
      </Routes>
    </Router>
  );
}

export default App;

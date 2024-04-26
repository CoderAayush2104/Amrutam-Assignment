
import './App.css'
import Navbar from './components/Navbar'

import { Route, Routes} from 'react-router'
import FindDoctorsPage from './pages/FindDoctorsPage/FindDoctorsPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <>
    <ScrollToTop/>
    <Navbar/>
    <Routes>
      <Route exact path="/"element={<FindDoctorsPage/>}/>
      <Route  path='/profile' element={<ProfilePage/>}/>
      </Routes>

    </>
  )
}

export default App

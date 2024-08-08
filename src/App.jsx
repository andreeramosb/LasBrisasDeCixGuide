import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './pages/Home/Home';
import MainPage from './pages/MainPage/MainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome/Welcome';
import BeforeTravel from './pages/BeforeTravel/BeforeTravel';
import Arriving from './pages/Arriving/Arriving';
import Department from './pages/Department/Department';
import Wifi from './pages/Wifi/Wifi';
import Rules from './pages/Rules/Rules';
import Contact from './pages/Contact/Contact';
import Location from './pages/Location/Location';
import SeeYou from './pages/SeeYou/SeeYou';

function App() {


  return (
    <div className='container-app'>
      <div className='container-425'>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<MainPage />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/before-travel" element={<BeforeTravel />} />
            <Route path="/arriving" element={<Arriving />} />
            <Route path="/apartment" element={<Department />} />
            <Route path="/internet" element={<Wifi />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/location" element={<Location />} />
            <Route path="/see-you" element={<SeeYou />} />
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App

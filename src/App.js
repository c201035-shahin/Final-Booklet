import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Pages/Home'
import Navbar from './Components/Navbar/Navbar'
import AboutUs from './Components/AboutUs/AboutUs'
import FirstPage from './Components/Pages/FirstPage'
import Childrens from './Components/Categories/Childrens'

function App() {
  return (
    <div>
      
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/FirstPage" element={<FirstPage />} />
        <Route path="/Childrens" element={<Childrens />} />
      </Routes>
    </div>
  );
}

export default App;

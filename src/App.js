import './App.css';
import Navbar from './components/Navbar';   
import Profile from './components/Profile';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Contact from './Pages/Contact';
import { Routes, Route} from 'react-router-dom';
import MyCarousel from "./Pages/MyCarousel";

const images = [
  "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];



function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile/>
      <Routes>
      <Route path="/Contact" element = {<Contact/>} />
      </Routes>
      <Routes>
      <Route path="/" element = { <MyCarousel images={images} />} />
      <Route path="/Home" element = { <MyCarousel images={images} />} />
      </Routes>
      
    
    </div>
  );
}

export default App;


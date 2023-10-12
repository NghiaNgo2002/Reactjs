import './App.css';
import Navbar from './components/Navbar';   
import Profile from './components/Profile';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Carousel from './Pages/Carousel';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile/>
      <Contact/>
      <Carousel/>
    </div>
  );
}

export default App;


import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpg from './components/website/landingpage';
import Contactpg from './components/website/contactpage';
import Gallerypg from './components/website/gallery';
import Applypg from './components/website/application';
import Signup from './components/website/signup';
import Login from './components/website/login';
import Blogpg from './components/website/blogs';
import Blogpost from './components/website/blogpost';
function App() {
  return (
  
     

      <Router>
     
        <Routes>
          <Route path="/" element={ <Landingpg/>} />
          <Route path="/contactus" element={<Contactpg />} />
          <Route path="/gallery" element={<Gallerypg />} />
          <Route path="/apply" element={<Applypg />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/news" element={<Blogpg />} />
          <Route path="/news:id" element={<Blogpost />} />
        </Routes>
      
    </Router>


  );
}

export default App;

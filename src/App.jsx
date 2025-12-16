import React from 'react';
import { Routes, Route, Form } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Blog from './Pages/Blog.jsx';
import Gallery from './Pages/Gallery.jsx';
import Contect from './Pages/Contect.jsx';
import About from './Pages/About.jsx';
import Navbar from './Component/Navbar.jsx';
import Team1 from './Pages/Team1.jsx';


// import Form from './Pages/Form.jsx';
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contect />} />
        <Route path='/about' element={<About />} />
        
        <Route path='/Team' element={<Team1 />} />
      </Routes>
    
    </div>
  );
}

export default App;

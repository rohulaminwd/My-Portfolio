import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import "aos/dist/aos.css";
import AOS from "aos";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from './Component/Navbar';
import Notfound from './Component/Notfound';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';

function App() {
  AOS.init();
  const [project, setProject] = useState({})
  const handleProject = (project) => {
    console.log(project)
    setProject(project)
  }
  
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar />
      <Routes>
        <Route path="/projectDetails" element={<ProjectDetails project={project} />} />
        <Route path="/" element={<Home  handleProject={handleProject} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path='*' element={<Notfound />}></Route>
      </Routes>
    </div>
  );
}

export default App;

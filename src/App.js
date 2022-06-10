import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';

function App() {

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
      </Routes>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';

const UseProject = () => {
   const [projects, setProject] = useState({});

   useEffect(() => {
       fetch('projects.json')
       .then(res => res.json())
       .then(data => setProject(data));
   }, [])

   return [projects, setProject];
};

export default UseProject;
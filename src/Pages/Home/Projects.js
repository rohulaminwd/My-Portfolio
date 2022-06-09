import React from 'react';
import project1 from '../../images/protfolio (2).jpg'
import project2 from '../../images/protfolio (3).jpg'
import project3 from '../../images/protfolio (4).webp'
import project4 from '../../images/protfolio (5).webp'
import project5 from '../../images/protfolio (6).webp'
import project6 from '../../images/protfolio (7).webp'
import ProjectsCart from './ProjectsCart';

const Projects = () => {
    const Projects = [
        {
            img: project1,
            class: "School Management",
            tittle: 'lorem ispum this is a class title and many question some description'
        },
        {
            img: project2,
            class: "School Management",
            tittle: 'lorem ispum this is a class title and many question some description'
        },
        {
            img: project3,
            class: "School Management",
            tittle: 'lorem ispum this is a class title and many question some description'
        },
        {
            img: project4,
            class: "School Management",
            tittle: 'lorem ispum this is a class title and many question some description'
        },
        {
            img: project5,
            class: "School Management",
            tittle: 'lorem ispum this is a class title and many question some description'
        },
        {
            img: project6,
            class: "School Management",
            tittle: 'lorem ispum this is a class title and many question some description'
        },
        
    ]
    return (
        <div>
            <h1 className='text-center text-3xl my-5 md:text-5xl uppercase font-bold text-cyan-900'>Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {
                    Projects.map((project, index) => <ProjectsCart key={index} project={project}  />)
                }
            </div>
        </div>
    );
};

export default Projects;
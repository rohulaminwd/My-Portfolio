import React from 'react';

import project1 from '../../images/protfolio (2).jpg'
import project2 from '../../images/protfolio (3).jpg'
import project3 from '../../images/protfolio (4).webp'
import project4 from '../../images/protfolio (5).webp'
import project5 from '../../images/protfolio (6).webp'
import project6 from '../../images/protfolio (7).webp'
import ProjectsCart from './ProjectsCart';

const Projects = ({handleProject}) => {



    const Projects = [
        {
            "id": "1",
            "img1": project1,
            "img2": "2",
            "img3": "3",
            "liveLink": "",
            "clientCode": "",
            "serverCode": "",
            "Technology": "ReactJS, Tailwind CSS, DaisyUI, React Router Dom, React Toastify, Firebase, React Firebase Hooks, React Hook Form, React Query, React Toastify, NodeJs, ExpressJs, Cors, DotEnv, Jsonwebtoken(JWT), Nodemon, MongoDB (Database), Stripe Js.",
            "keyFeature": "Login, registration, reset password, logout, email verification, and Google sign in with Firebase authentication have all been added. There is a dashboard route which is private. After logging in, the user can see this. On the dashboard there are three nested routes for normal users and 5 nested routes for admin. Payment system has been implemented. This will allow users to book their appointments and make card payments.",
            "name": "School Management"
        },
        {
            "id": "2",
            "img1": project2,
            "img2": "2",
            "img3": "3",
            "liveLink": "",
            "clientCode": "",
            "serverCode": "",
            "Technology": "ReactJS, Tailwind CSS, DaisyUI, React Router Dom, React Toastify, Firebase, React Firebase Hooks, React Hook Form, React Query, React Toastify, NodeJs, ExpressJs, Cors, DotEnv, Jsonwebtoken(JWT), Nodemon, MongoDB (Database), Stripe Js.",
            "keyFeature": "Login, registration, reset password, logout, email verification, and Google sign in with Firebase authentication have all been added. There is a dashboard route which is private. After logging in, the user can see this. On the dashboard there are three nested routes for normal users and 5 nested routes for admin. Payment system has been implemented. This will allow users to book their appointments and make card payments.",
            "name": "School Management"
        },
        {
            "id": "3",
            "img1": project3,
            "img2": "2",
            "img3": "3",
            "liveLink": "",
            "clientCode": "",
            "serverCode": "",
            "Technology": "ReactJS, Tailwind CSS, DaisyUI, React Router Dom, React Toastify, Firebase, React Firebase Hooks, React Hook Form, React Query, React Toastify, NodeJs, ExpressJs, Cors, DotEnv, Jsonwebtoken(JWT), Nodemon, MongoDB (Database), Stripe Js.",
            "keyFeature": "Login, registration, reset password, logout, email verification, and Google sign in with Firebase authentication have all been added. There is a dashboard route which is private. After logging in, the user can see this. On the dashboard there are three nested routes for normal users and 5 nested routes for admin. Payment system has been implemented. This will allow users to book their appointments and make card payments.",
            "name": "School Management"
        },
        {
            "id": "4",
            "img1": project4,
            "img2": "2",
            "img3": "3",
            "liveLink": "",
            "clientCode": "",
            "serverCode": "",
            "Technology": "ReactJS, Tailwind CSS, DaisyUI, React Router Dom, React Toastify, Firebase, React Firebase Hooks, React Hook Form, React Query, React Toastify, NodeJs, ExpressJs, Cors, DotEnv, Jsonwebtoken(JWT), Nodemon, MongoDB (Database), Stripe Js.",
            "keyFeature": "Login, registration, reset password, logout, email verification, and Google sign in with Firebase authentication have all been added. There is a dashboard route which is private. After logging in, the user can see this. On the dashboard there are three nested routes for normal users and 5 nested routes for admin. Payment system has been implemented. This will allow users to book their appointments and make card payments.",
            "name": "School Management"
        },
        {
            "id": "5",
            "img1": project5,
            "img2": "2",
            "img3": "3",
            "liveLink": "",
            "clientCode": "",
            "serverCode": "",
            "Technology": "ReactJS, Tailwind CSS, DaisyUI, React Router Dom, React Toastify, Firebase, React Firebase Hooks, React Hook Form, React Query, React Toastify, NodeJs, ExpressJs, Cors, DotEnv, Jsonwebtoken(JWT), Nodemon, MongoDB (Database), Stripe Js.",
            "keyFeature": "Login, registration, reset password, logout, email verification, and Google sign in with Firebase authentication have all been added. There is a dashboard route which is private. After logging in, the user can see this. On the dashboard there are three nested routes for normal users and 5 nested routes for admin. Payment system has been implemented. This will allow users to book their appointments and make card payments.",
            "name": "School Management"
        },
        {
            "id": "6",
            "img1": project6,
            "img2": "2",
            "img3": "3",
            "liveLink": "",
            "clientCode": "",
            "serverCode": "",
            "Technology": "ReactJS, Tailwind CSS, DaisyUI, React Router Dom, React Toastify, Firebase, React Firebase Hooks, React Hook Form, React Query, React Toastify, NodeJs, ExpressJs, Cors, DotEnv, Jsonwebtoken(JWT), Nodemon, MongoDB (Database), Stripe Js.",
            "keyFeature": "Login, registration, reset password, logout, email verification, and Google sign in with Firebase authentication have all been added. There is a dashboard route which is private. After logging in, the user can see this. On the dashboard there are three nested routes for normal users and 5 nested routes for admin. Payment system has been implemented. This will allow users to book their appointments and make card payments.",
            "name": "School Management"
        }
        
    ]
    return (
        <div id='Project'>
            <h1 className='text-center text-3xl my-5 md:text-5xl uppercase font-bold text-cyan-900'>Projects {Projects?.length}</h1>
            <div className="grid grid-cols-1 py-3 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {
                    Projects?.map((project) => <ProjectsCart 
                        key={project.id} 
                        handleProject={handleProject} 
                        project={project}  
                    />)
                }
            </div>
        </div>
    );
};

export default Projects;
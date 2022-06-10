import React from 'react';

import school1 from '../../images/school2.PNG'
import school2 from '../../images/School1.PNG'
import school3 from '../../images/school3.PNG'

import gorcery1 from '../../images/grocery1.PNG'
import gorcery2 from '../../images/grocery2.PNG'
import gorcery3 from '../../images/grocery3.PNG'

import manufacer1 from '../../images/manufactur1.PNG'
import manufacer2 from '../../images/manufacer2.PNG'
import manufacer3 from '../../images/manufacer3.PNG'

import onion1 from '../../images/onion1.PNG'
import onion2 from '../../images/onion2.PNG'
import onion3 from '../../images/onion3.PNG'

import gym1 from '../../images/gym1.PNG'
import gym2 from '../../images/gym2.PNG'
import gym3 from '../../images/gym3.PNG'

import gymnasium1 from '../../images/gymnasium1.PNG'
import gymnasium2 from '../../images/gymasium2.PNG'
import gymnasium3 from '../../images/gymnasium3.PNG'



import ProjectsCart from './ProjectsCart';

const Projects = ({handleProject}) => {



    const Projects = [
        {
            "id": "1",
            "img1": school1,
            "img2": school2,
            "img3": school3,
            "liveLink": "https://manufacture-5aaff.web.app/",
            "clientCode": "https://github.com/rohulaminwd/School-management",
            "serverCode": "https://github.com/rohulaminwd/school-management-server",
            "Technology": "ReactJS, Tailwind CSS, DaisyUI, React Router Dom, React Toastify, Firebase, React Firebase Hooks, React Hook Form, React Query, React Toastify, NodeJs, ExpressJs, Cors, DotEnv, Jsonwebtoken(JWT), Nodemon, MongoDB (Database), Stripe Js.",
            "keyFeature": "Login, registration, reset password, logout, email verification, and Google sign in with Firebase authentication have all been added. There is a dashboard route which is private. After logging in, the user can see this. On the dashboard there are three nested routes for normal users and 5 nested routes for admin. Payment system has been implemented. This will allow users to book their appointments and make card payments.",
            "name": "School Management"
        },
        {
            "id": "2",
            "img1": gorcery1,
            "img2": gorcery2,
            "img3": gorcery3,
            "liveLink": "https://grocery-stock-90a1c.web.app/",
            "clientCode": "https://github.com/rohulaminwd/grosarys-stock-client",
            "serverCode": "https://github.com/rohulaminwd/grosery-stock-sever",
            "Technology": "ReactJS, Tailwind CSS, DaisyUI, React Router Dom, React Toastify, Firebase, React Firebase Hooks, React Hook Form, React Query, React Toastify, NodeJs, ExpressJs, Cors, DotEnv, Jsonwebtoken(JWT), Nodemon, MongoDB (Database), Stripe Js.",
            "keyFeature": "Login, registration, reset password, logout, email verification, and Google sign in with Firebase authentication have all been added. There is a dashboard route which is private. After logging in, the user can see this. On the dashboard there are three nested routes for normal users and 5 nested routes for admin. Payment system has been implemented. This will allow users to book their appointments and make card payments.",
            "name": "Grocery Stock"
        },
        {
            "id": "3",
            "img1": manufacer1,
            "img2": manufacer2,
            "img3": manufacer3,
            "liveLink": "https://delightful-douhua-53d7e4.netlify.app/",
            "clientCode": "https://github.com/rohulaminwd/manufacture",
            "serverCode": "https://github.com/rohulaminwd/school-management-server",
            "Technology": "ReactJS, Tailwind CSS, DaisyUI, React Router Dom, React Toastify, Firebase, React Firebase Hooks, React Hook Form, React Query, React Toastify, NodeJs, ExpressJs, Cors, DotEnv, Jsonwebtoken(JWT), Nodemon, MongoDB (Database), Stripe Js.",
            "keyFeature": "Login, registration, reset password, logout, email verification, and Google sign in with Firebase authentication have all been added. There is a dashboard route which is private. After logging in, the user can see this. On the dashboard there are three nested routes for normal users and 5 nested routes for admin. Payment system has been implemented. This will allow users to book their appointments and make card payments.",
            "name": "Manufacturer"
        },
        {
            "id": "4",
            "img1": onion1,
            "img2": onion2,
            "img3": onion3,
            "liveLink": "https://red-onion-ff595.web.app/",
            "clientCode": "https://github.com/rohulaminwd/red-onion",
            "serverCode": "",
            "Technology": "ReactJS, Tailwind CSS, DaisyUI, React Router Dom, React Toastify, Firebase, React Firebase Hooks, React Hook Form, React Query, React Toastify, NodeJs, ExpressJs, Cors, DotEnv, Jsonwebtoken(JWT), Nodemon, MongoDB (Database), Stripe Js.",
            "keyFeature": "Login, registration, reset password, logout, email verification, and Google sign in with Firebase authentication have all been added. There is a dashboard route which is private. After logging in, the user can see this. On the dashboard there are three nested routes for normal users and 5 nested routes for admin. Payment system has been implemented. This will allow users to book their appointments and make card payments.",
            "name": "Red Onion"
        },
        {
            "id": "5",
            "img1": gymnasium1,
            "img2": gymnasium2,
            "img3": gymnasium3,
            "liveLink": "https://symphonious-kleicha-bad42f.netlify.app/",
            "clientCode": "https://github.com/rohulaminwd/assainment-9-school",
            "serverCode": "",
            "Technology": "ReactJS, Tailwind CSS, DaisyUI, React Router Dom, React Toastify, Firebase, React Firebase Hooks, React Hook Form, React Query, React Toastify, NodeJs, ExpressJs, Cors, DotEnv, Jsonwebtoken(JWT), Nodemon, MongoDB (Database), Stripe Js.",
            "keyFeature": "Login, registration, reset password, logout, email verification, and Google sign in with Firebase authentication have all been added. There is a dashboard route which is private. After logging in, the user can see this. On the dashboard there are three nested routes for normal users and 5 nested routes for admin. Payment system has been implemented. This will allow users to book their appointments and make card payments.",
            "name": "E School"
        },
        {
            "id": "6",
            "img1": gym1,
            "img2": gym2,
            "img3": gym3,
            "liveLink": "https://rohulaminwd.github.io/Zime-clube/",
            "clientCode": "https://github.com/rohulaminwd/Zime-clube",
            "serverCode": "",
            "Technology": "ReactJS, Tailwind CSS, DaisyUI, React Router Dom, React Toastify, Firebase, React Firebase Hooks, React Hook Form, React Query, React Toastify, NodeJs, ExpressJs, Cors, DotEnv, Jsonwebtoken(JWT), Nodemon, MongoDB (Database), Stripe Js.",
            "keyFeature": "Login, registration, reset password, logout, email verification, and Google sign in with Firebase authentication have all been added. There is a dashboard route which is private. After logging in, the user can see this. On the dashboard there are three nested routes for normal users and 5 nested routes for admin. Payment system has been implemented. This will allow users to book their appointments and make card payments.",
            "name": "Night Club"
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
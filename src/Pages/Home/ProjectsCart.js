import React from 'react';
import { Link } from 'react-router-dom';


const ProjectsCart = ({project, handleProject}) => {
    return (
        <div>
            <div className='rounded-xl p-3 shadow-box duration-200 hover:-translate-y-1'>
                <div className="rounded-lg">
                    <img src={project.img1} className='rounded-md' alt="" />
                </div>
                <div className="mt-2">
                    <div className="flex items-center justify-between">
                        <h1 className='text-cyan-900 text-xl font-bold '>{project.name}</h1>
                        <h1 className='text-cyan-500 font-bold rounded-md px-2 bg-cyan-200'>{project.id}</h1>
                    </div>
                    <p className='text-sm'>{project.keyFeature.slice(0, 80)}..</p>
                    <Link to='projectDetails' onClick={() => handleProject(project)} className='btn-sm mt-2 btn w-full btn-secondary text-white'>See details</Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectsCart;
import React from 'react';

const ProjectsCart = ({project}) => {
    return (
        <div>
            <div className='rounded-xl p-3 shadow-box duration-200 hover:-translate-y-1'>
                <div className="rounded-lg">
                    <img src={project.img} className='rounded-md' alt="" />
                </div>
                <div className="mt-2">
                    <div className="flex items-center justify-between">
                        <h1 className='text-cyan-900 text-xl font-bold '>{project.class}</h1>
                        <h1 className='text-cyan-500 font-bold rounded-md px-2 bg-cyan-200'>55</h1>
                    </div>
                    <p className='font-xs'>{project.tittle}</p>
                    <button className='btn-sm mt-2 btn w-full btn-secondary text-white'>See details</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectsCart;
import React from 'react';

const ProjectDetails = ({project}) => {
    return (
        <div className='px-2 mt-20 md:px-8 lg:px-16 ox-hidden'>
            <h1 className='text-3xl md:text-5xl uppercase font-bold text-center text-secondary'>{project.name}</h1>
            <div className="md:flex gap-4 my-5">
                <div className="mb-4 md:mb-0 border-4 border-cyan-500 rounded-xl">
                    <img src={project.img1} className='rounded-lg' alt="" />
                </div>
                <div className="flex gap-4">
                    <div className="border-4 border-cyan-500 rounded-xl">
                        <img src={project.img1} className='rounded-lg' alt="" />
                    </div>
                    <div className="border-4 border-cyan-500 rounded-xl">
                        <img src={project.img1} className='rounded-lg' alt="" />
                    </div>
                </div>
            </div>
    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 border rounded-xl border-blue-300 border-l-8 p-3">
                    <h1 className='text-2xl font-bold text-cyan-900'>Key Features</h1>
                    <p>{project.keyFeature}</p>
                </div>
                <div className="bg-blue-50 border rounded-xl  border-blue-300 border-l-8 p-3">
                    <h1 className='text-2xl font-bold text-cyan-900'>Technology</h1>
                    <p>{project.Technology}</p>
                </div>
            </div>

            <div className="my-5">
                <h1 className='text-2xl text-cyan-800 font-bold'>{project.name}</h1>
                <div className="">
                    <a className='link link-primary' href=""><button className='btn btn-ghost btn-sm'>Live Link</button></a>
                    <a className='link link-primary' href=""><button className='btn btn-ghost btn-sm'>Server code Link</button></a>
                    <a className='link link-primary' href=""><button className='btn btn-ghost btn-sm'>Client code link</button></a>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
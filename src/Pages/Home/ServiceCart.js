import React from 'react';

const ServiceCart = ({service}) => {
    return (
        <div className="p-3" data-aos="zoom-in-down" data-aos-delay="100" data-aos-duration="800">
            <div className='rounded-xl serviceBox shadow-box border p-3'>
                <div className="pb-3">
                    <h1 className='text-5xl text-white text-bold'>{service.icon}</h1>
                </div>
                <div className="mt-4">
                    <h1 className='text-xl font-bold'>{service.name}</h1>
                    <p className='text-md'>{service.describe}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCart;
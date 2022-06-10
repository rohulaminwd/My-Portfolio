import React from 'react';
import ServiceCart from './ServiceCart';
import {BiCodeAlt} from 'react-icons/bi'
import {BsWordpress} from 'react-icons/bs'
import {MdPhoneAndroid} from 'react-icons/md'
import {CgWebsite} from 'react-icons/cg'
import {SiReact} from 'react-icons/si'
import {MdOutlineSyncProblem} from 'react-icons/md'
import Slider from 'react-slick/lib/slider';

const Service = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 780,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    const services = [
        {
            name: "Web Development",
            icon: <BiCodeAlt />,
            describe: "lorem Javascript, React Js, HTML, and CSS with a focus on front-end development."
        },
        {
            name: "Responsive Design",
            icon: <MdPhoneAndroid />,
            describe: "lorem Javascript, React Js, HTML, and CSS with a focus on front-end development."
        },
        {
            name: "Web Design",
            icon: <CgWebsite />,
            describe: "lorem Javascript, React Js, HTML, and CSS with a focus on front-end development."
        },
        {
            name: "Bag Fixed",
            icon: <MdOutlineSyncProblem />,
            describe: "lorem Javascript, React Js, HTML, and CSS with a focus on front-end development."
        },
        {
            name: "Wordpress",
            icon: <BsWordpress />,
            describe: "lorem Javascript, React Js, HTML, and CSS with a focus on front-end development."
        },
        {
            name: "React Development",
            icon: <SiReact />,
            describe: "lorem Javascript, React Js, HTML, and CSS with a focus on front-end development."
        },
    ]
    return (
        <div className='my-10'>
            <h1 className='text-center text-3xl font-bold md:text-5xl my-8 text-cyan-900 uppercase'>My Services</h1>
            <div className='my-5'>
                <Slider {...settings}>
                {
                    services.map((service, index) => <ServiceCart key={index} service={service} />)
                }
                </Slider>
            </div>
        </div>
    );
};

export default Service;
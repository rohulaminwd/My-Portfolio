import React from 'react';
import Slider from 'react-slick/lib/slider';
import '../Pages/Home/Home.css'

const Chating = () => {
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 500,
        arrow: false,
        autoplay: true,
        autoplaySpeed: 3000,
        vertical: true,
        verticalSwiping: true,
      };
    return (
        <div className='w-full'>
            <Slider {...settings}>
                <div className='w-full sms-l my-1'>
                    <span className='left-item p-1'>Hi..ð Rahul..</span>
                </div>
                <div className='w-full sms-r my-1'>
                    <span className='right-item p-1'>Hello..ð Whats up..ð</span>
                </div>
                <div className='w-full sms-l my-1'>
                    <span className='left-item p-1'>What do you do..?</span>
                </div>
                <div className='w-full sms-r my-1'>
                    <span className='right-item p-1'>I am a web developer..ðð</span>
                </div>
                <div className='w-full sms-l my-1'>
                    <span className='left-item p-1'>Wow..! nice good job. You can create a website for me.ðð</span>
                </div>
                <div className='w-full sms-r my-1'>
                    <span className='right-item p-1'>sure..â¤ï¸â¤ï¸</span>
                </div>
                <div className='w-full sms-l my-1'>
                    <span className='left-item p-1'>Thank You so much..ð¥°ð¥°</span>
                </div>
                <div className='w-full sms-r my-1'>
                    <span className='right-item p-1'>Nice to meet youâ¤ï¸</span>
                </div>
            </Slider>
        </div>
    );
};

export default Chating;
import React from 'react';
import Slider from 'react-slick/lib/slider';
import ReviewCard from './ReviewCard';

const Review = () => {

    const reviews = [
        {
          name: "Rohul amin",
          starr: [1, 2, 3, 4],
          description: "Wow He is Nice developer, I am Happy, Your service is very good..!"
        },
        {
          name: "Mamun",
          starr: [1, 2, 3, 4, 5],
          description: "Wow He is Nice developer, I am Happy, Your service is very good..!"
        },
        {
          name: "Sorif",
          starr: [1, 2, 3],
          description: "Wow He is Nice developer, I am Happy, Your service is very good..!"
        },
        {
          name: "Ariful Islam",
          starr: [1, 2, 3, 4],
          description: "Wow He is Nice developer, I am Happy, Your service is very good..!"
        },
        {
          name: "Kader goni",
          starr: [1, 2, 3],
          description: "Wow He is Nice developer, I am Happy, Your service is very good..!"
        },
        {
          name: "Roni",
          starr: [1, 2, 3, 4, 5],
          description: "Wow He is Nice developer, I am Happy, Your service is very good..!"
        },
    ]
    
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
    return (
        <div className='my-10'>
            <h1 className='lg:text-4xl text-2xl text-cyan-900 font-bold text-center my-8'>My Clients Reviews</h1>
            <div>
                <Slider {...settings}>
                {
                    reviews?.slice(0, 6).map(review => <ReviewCard
                        key={review._id}
                        review={review}
                        ></ReviewCard>)
                }
                </Slider>
            </div>
        </div>
    );
};

export default Review;
"use client"

import React from 'react'
import Slider from 'react-slick'
import Slide from './Slide'
const Hero = () => {

     var settings = {
        dots: true,
        infinite: true,
        slideToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
     };

     const slideData = [
        {
            id: 0,
            img: "/banner 01.png",
            title: "",
            mainTitle: "",
            price: "",
        },
        {
            id: 1,
            img: "/newbanner02.png",
            title: "",
            mainTitle: "",
            price: "",
        },
        {
            id: 2,
            img: "/newbanner03.png",
            title: "",
            mainTitle: "",
            price: "",
        },
     ]

  return (

    <div>
        <div className='container pt-6 lg:pt-0'>
            <Slider {...settings}>
                {slideData.map((item) => (
                    <Slide 
                      key={item.id}
                      img={item.img} 
                      title={item.title}
                      mainTitle={item.mainTitle}
                      price={item.price}
                      />
                       
                ))}
            </Slider>
        </div>
    </div>
  )
}

export default Hero


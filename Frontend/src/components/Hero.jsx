import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import heroImage from '../assets/uneza-bg.jpg';
import gik from "../assets/GIK.jpg"
import gik2 from "../assets/gik2.jpg"
import gik3 from "../assets/giki3.jpg"


import { FaPlayCircle } from 'react-icons/fa';

const Hero = () => {
  const slides = [
    {
      id: 1,
      title: "Bridging Knowledge with Real‑World Impact.",
      description: "Unlock your potential with world-class education, innovative research, and a vibrant community.",
      image: heroImage
    },
    {
      id: 2,
      title: "Empowering Future Innovators.",
      description: "Join a culture of innovation and leadership to shape tomorrow.",
      image: gik
    },
    {
      id: 3,
      title: "Discover. Learn. Achieve.",
      description: "Where dreams meet opportunity through cutting-edge academics.",
      image: gik2
    }
    ,
    {
      id: 4,
      title: "Discover. Learn. Achieve.",
      description: "Where dreams meet opportunity through cutting-edge academics.",
      image: gik3
    }
  ];

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop={true}
      className="h-screen"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className="h-screen w-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white px-4 text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="max-w-2xl text-lg mb-8">{slide.description}</p>
              <button className="flex items-center text-white bg-white/40 px-4 py-2 rounded-full hover:bg-red-700 transition">
                <FaPlayCircle className="text-2xl mr-2" />
                Watch Tour
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
 
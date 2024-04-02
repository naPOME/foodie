import React from "react";
import HoverCarousel from 'hover-carousel'

const Gallery = () => {
  const images = [
    "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=600",
    // Add more image URLs here
  ];

  return (
    <div className="bg-yellow-50 pt-10 pb-10 px-5">
        <h4 className=" font-thin text-center text-gray-600 text-3xl pb-5 pt-5 ">Check Our <span className="font-bold text-orange-500 ">Gallery</span> </h4>
    <div className="pb-5 pt-5">
      <HoverCarousel images={images} />
    </div>
    </div>
  );
};

export default Gallery;
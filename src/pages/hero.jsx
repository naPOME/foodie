import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import image1 from '../assets/image1.png';

export const Hero = () => {
    return (
        <div className="relative bg-yellow-50 ">
            <div className="container mx-auto px-4 py-8 lg:py-16">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between">
                    <div className="md:w-6/12">
                        <h1 className="text-balance font-extrabold text-4xl md:text-5xl text-slate-700 mb-4 md:mb-8">Your favorite dishes,<br/> right at your door</h1>
                        <p className="text-slate-700 font-light mb-4 md:mb-6 text-pretty">Sit amet consectetur adipisicing elit. <a href="#" className="text-yellow-800">connection</a> tenetur nihil quaerat suscipit, sunt dignissimos.</p>
                        <div className="flex space-x-4 md:space-x-6">
                            <button type="button" className="text-gray-100 bg-gradient-to-br from-orange-400 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-full text-sm px-6 py-2.5">Order Now</button>
                            <div className="flex items-center space-x-2">
                                <div className="w-9 h-9 flex items-center justify-center border border-yellow-600 rounded-full">
                                    <FontAwesomeIcon icon={faPlay} className="text-gray-500 w-4 h-4 animate-pulse" />
                                </div>
                                <span className="text-orange-500 font-semibold">Watch Now</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-6/12">
                        {/* Desktop Image */}
                        <motion.img 
                            src="https://tailus.io/sources/blocks/food-delivery/preview/images/food.webp" 
                            className="w-full  rounded-lg object-cover hidden md:block" 
                            alt="food illustration desktop" 
                            loading="lazy" 
                            animate={{ opacity: 1, transition: { duration: 0.7, delay: 0.7 } }}
                            initial={{ opacity: 0 }}
                        />
                        
                        {/* Mobile Image */}
                        <motion.img 
                            src={image1} 
                            className="w-full  h-auto max-h-50 rounded-lg object-cover block md:hidden " 
                            alt="food illustration mobile" 
                            loading="lazy" 
                            animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
                            initial={{ opacity: 0 }}
                        /> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

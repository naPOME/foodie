import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';



export const Hero = () => {
    return (
        <div className="relative bg-yellow-50">
            <div className="container mx-auto pt-2 md:px-0 lg:pt-[1.8rem] lg:px-0">
                <div className="flex items-center flex-wrap md:px-0">
                    <div className="relative lg:w-6/12 lg:py-24 xl:py-32">
                        <h1 className=" text-balance font-extrabold text-5xl text-slate-700 md:text-5xl lg:w-11/12 text-justify pl-14">Your favorite dishes,<br/> right at your door</h1>
                        <p className="mt-8 text-slate-700 lg:w-10/12 font-light text-justify pl-14 text-pretty">Sit amet consectetur adipisicing elit. <a href="#" className="text-yellow-800">connection</a> <br/>tenetur nihil quaerat suscipit,sunt dignissimos.</p>
                        <div className="flex mt-8 ">
                            <button type="button" className="  text-gray-100 bg-gradient-to-br ml-20 from-orange-400 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-3xl text-sm px-8 py-2.5 justify-start">Order Now</button>
                            <div className="flex items-center justify-between ml-10">
                                <div className="w-9 h-9 flex items-center justify-center border border-yellow-600 rounded-full mr-2">
                                    <FontAwesomeIcon icon={faPlay} className="text-gray-500 w-4 h-4 pl-1 animate-pulse" />
                                </div>
                                <span className="text-orange-500 font-semibold">Watch Now</span>
                            </div>
                        </div>
                    </div>
                    <div className="ml-auto -mb-10 lg:-mb-26 lg:w-6/12 pt-2">
                        <img src="https://tailus.io/sources/blocks/food-delivery/preview/images/food.webp" className="relative w-3000 h-3000 delay-2000 transition-opacity" alt="food illustration" loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    );
};

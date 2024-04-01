"use client"
import {React,useState,useEffect} from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from './Slider.module.css'
const SliderComponent = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const images = [
        '/Assets/Landing/1.jpg',
        '/Assets/Landing/2.jpg',
        '/Assets/Landing/3.jpg'
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 6000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="relative w-full">
            <img src={images[1]} alt="landing logo" className="opacity-30 w-full h-full absolute top-0 left-0 object-cover" />
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full text-center">
                <h1 className={`${style.textItem} transform transition-opacity duration-500 text-white text-4xl font-bold mb-4`}>
                    I am a Meta Certified Mern Stack Developer
                </h1>
                
            </div>
        </div>
    );
};

export default SliderComponent;
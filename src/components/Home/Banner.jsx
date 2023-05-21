import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className='flex flex-col md:flex-row gap-9 mt-7 mb-28'>
            <div className='w-full'>
                <h2 className=' text-5xl font-semibold text-purple-600'>Fun to learn,</h2>
                <h2 className='text-accent text-5xl my-3'>Enjoy Learning</h2>
                <p className='text-gray-500 my-7'>A toy with learning capacity is a great thing for your child's mental development. So why not make the best decision for your child today? </p>
                <Link className='btn text-white rounded border-none font-bold bg-[#FF1276]' to='/all-toys'><button>SHOP NOW</button></Link>
            </div>
            <div className="w-full relative flex flex-col-reverse gap-2">

                <div className="lg:w-72 w-52 h-52 m-auto rounded-full lg:h-72 bg-purple-800 relative overflow-hidden ">
                    <img className='max-w-70 max-h-70  top-5 absolute' data-aos="fade-up" data-aos-delay="500" src="https://i.ibb.co/cX8KhjD/ryan-fields-Xz7-MMD5t-Zw-A-unsplash-removebg-preview.png" alt="" />
                </div>
                <div className="w-20 right-20 top-14  md:absolute h-20 bg-accent rounded-full"></div>
                <div className="w-12 right-36 top-4  md:absolute h-12 bg-[#FF1276] rounded-full"></div>
                <div className="w-10 right-24 top-0 md:absolute h-10 bg-purple-600 rounded-full"></div>

            </div>
        </div>
    );
};

export default Banner;
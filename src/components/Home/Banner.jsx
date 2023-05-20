import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='flex mt-7 mb-28'>
            <div className='w-full'>
                <h2 className=' text-5xl  text-purple-600'>Fun to learn,</h2>
                <h2 className='text-accent text-5xl my-3'>Enjoy Edu<span className='text-[#FF1276]'>Toys</span></h2>
                <p className='text-gray-500 my-7'>A toy with learning capacity is a great thing for your child's mental development. So why not make the best decision for your child today? </p>
                <Link className='btn rounded border-none font-bold bg-[#FF1276]' to='/all-toys'><button>SHOP NOW</button></Link>
            </div> 
            <div className="w-full relative flex">
                
                <div className="w-72 m-auto rounded-full h-72 bg-purple-800 relative overflow-hidden ">
                <img className='  w-70 h-70  top-5 absolute' src="https://i.ibb.co/cX8KhjD/ryan-fields-Xz7-MMD5t-Zw-A-unsplash-removebg-preview.png" alt="" />
                </div>
                <div className="w-10 right-24 top-0 absolute h-10 bg-purple-600 rounded-full"></div>
                <div className="w-20 right-20 top-14  absolute h-20 bg-accent rounded-full"></div>
                <div className="w-12 right-36 top-4  absolute h-12 bg-[#FF1276] rounded-full"></div>

           </div>
        </div>
    );
};

export default Banner;
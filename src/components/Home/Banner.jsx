import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='flex h-96'>
            <div className='w-full'>
                <h2 className=' text-5xl lg:mt-32'>Fun to learn,</h2>
                <h2 className='text-accent text-5xl'>Enjoy EduToys</h2>
                <p className='text-gray-500'>A toy with learning capacity is a great thing for your child's mental development. So why not make the best decision for your child today? </p>
                <Link className='btn rounded border-none font-bold bg-[#FF1276]' to='/all-toys'><button>SHOP NOW</button></Link>
            </div> 
           
        </div>
    );
};

export default Banner;
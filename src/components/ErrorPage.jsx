import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='items-center h-screen flex justify-center flex-col'>
            <img className='  w-1/2' src="https://i.ibb.co/8zHDbrf/pngegg.png" alt="404 error" />
            <h2 className='text-xl'>Back to <Link className='font-bold text-white rounded-box bg-purple-500 py-3 ml-1 px-5'>home</Link></h2>
        </div>
    );
};

export default ErrorPage;
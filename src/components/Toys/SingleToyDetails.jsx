import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToyDetails = () => {

    const { name, picture, sellerName, sellerEmail, price, rating, quantity, description } = useLoaderData();
    
    return (
        <div className='flex flex-col border-8 md:flex-row items-center justify-center border-purple-400 rounded-box md:py-12 mt-9  px-12 py-52 gap-5 min-h-[calc(100vh-300px)]'>
            <div className='w-full'><img src={picture} className='w-full object-cover rounded-box' alt="" /></div>
            <div className='w-full'>
                <h2 className='text-3xl font-bold mb-5 text-purple-600'>{name}</h2>
          <p><span className='font-bold'>Seller Name:</span> {sellerName}</p>
          <p><span className='font-bold'>Seller Email:</span> {sellerEmail}</p>
            <p><span className='font-bold'>Price:</span> {price}$</p>
          <p><span className='font-bold'>Rating:</span> {rating}</p>
          <p><span className='font-bold'>Available Quantity:</span> {rating}</p>
          <p><span className='font-bold'>Detail Description:</span> <br /> {description}</p>
            </div>
        </div>
    );
};

export default SingleToyDetails;
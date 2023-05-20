import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToyDetails = () => {

    const { name, picture, sellerName, sellerEmail, price, rating, quantity, description } = useLoaderData();
    
    return (
        <div className='flex flex-col justify-evenly md:py-0 py-52 gap-5 items-center min-h-[calc(100vh-340px)]'>
            <img src={picture} className='max-w-96 max-h-96 object-cover rounded-box' alt="" />
            <div>
                <h2 className='text-3xl font-bold mb-5'>{name}</h2>
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
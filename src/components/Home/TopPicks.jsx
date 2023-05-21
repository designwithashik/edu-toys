import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const TopPicks = () => {
    const {toys} = useContext(AuthContext)

    return (
        <div className='mb-28'>
            <h2 className='text-3xl mb-3 font-bold '>Trending Products</h2>
            <p className='text-gray-500 mb-7'>A toy with learning capacity is a great thing for your child's mental development. Try any product at affordable price </p>

            <h2 className='text-center font-bold text-[#FF1276] mb-7'>Top Picks</h2>
            <div className="carousel bg-purple-100 carousel-center max-w-full p-4 space-x-4 rounded-box">
                {toys.slice(0,6).map(toy=><div key={toy._id} className="carousel-item">
                    
                    <div>
                        <img  src={toy.picture} className="rounded-box h-[80%] w-72 object-cover" />
                        <p className={`p-5 mt-4 text-white font-bold rounded-box ${toy.subCategory ==='Language Toys'?'bg-[#FF1276]' : toy.subCategory === 'Engineering Toys'?'bg-accent':'bg-purple-600'}`}>{toy.name}</p>
                    </div>
   
  </div> )}
            </div>
        </div>
    );
};

export default TopPicks;
import React from 'react';
import { Link } from 'react-router-dom';

const ToyCard = ({ toy }) => {
    const { name, picture, price, rating } = toy;
    return (
        
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title text-accent w-full">{name}!</h2>
                    <p><span className='font-bold'>Price:</span> {price}$</p>
          <p><span className='font-bold'>Rating:</span> {rating}</p>
          <div><Link className='btn btn-sm rounded-xl text-white border-none bg-[#FF1276]' to={`/toy/${toy._id}`}>View Details</Link></div>
          
  </div>
  <figure ><img className='h-[256px] w-full object-cover' src={picture} alt="product" /></figure>
</div>
    
    );
};

export default ToyCard;
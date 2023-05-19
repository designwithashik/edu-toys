import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const TopPicks = () => {
    const {toys} = useContext(AuthContext)

    return (
        <div>
            <h2 className='text-center font-bold text-[#FF1276]'>Top Picks Today</h2>
            <div className="carousel bg-accent  carousel-center max-w-full p-4 space-x-4 rounded-box">
                {toys.slice(0,5).map(toy=><div className="carousel-item">
                    
                    <img  src={toy.picture} className="rounded-box w-72 object-cover " />
   
  </div> )}
            </div>
        </div>
    );
};

export default TopPicks;
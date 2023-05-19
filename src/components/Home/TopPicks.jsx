import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const TopPicks = () => {
    const {toys} = useContext(AuthContext)

    return (
        <div>
            <h2 className='text-center font-bold text-[#FF1276]'>Top Picks Today</h2>
            <div className="carousel bg-accent  carousel-center max-w-full p-4 space-x-4 rounded-box">
                {toys.slice(0,5).map(toy=><div className="carousel-item">
                    
                    <div>
                        <img  src={toy.picture} className="rounded-box h-[80%] w-72 object-cover" />
                        <p className={`p-5 mt-4 text-white font-bold rounded-box ${toy.subCategory ==='Language Toys'?'bg-[#FF1276]' : toy.subCategory === 'Engineering Toys'?'bg-primary':'bg-error'}`}>{toy.name}</p>
                    </div>
   
  </div> )}
            </div>
        </div>
    );
};

export default TopPicks;
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';

const AllToys = () => {
    const { toys, user } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()
    console.log(toys)


    
    
    return (
        <div className='overflow-x-scroll lg:overflow-hidden'>
      <h2 className="text-3xl  text-center font-bold mb-4">All Toys</h2>

            <table className="table w-full ">
    {/* head */}
    <thead>
      <tr>
        <th>Toy Name</th>
        <th>Seller</th>
        <th>Sub-category</th>
        <th>Price</th>
        <th>Available Quantity</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* toys row */}
                        {toys.map(toy => {
        return  <tr>
         
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={toy?.picture} />
                </div>
              </div>
              <div>
                          <div className="font-bold">{toy.name}</div>
               
              </div>
            </div>
          </td>
          <td>
                {toy?.sellerName}
          </td>
            <td>{toy?.subCategory}</td>
            <td>{toy?.price}$</td>
            <td>{toy?.quantity}</td>
          <td>
            <Link to={`/toy/${toy._id}`}><button className="btn btn-accent btn-xs">View details</button></Link>
          </td>
        </tr>
      })}
    </tbody>
    
  </table>

        </div>
    );
};

export default AllToys;
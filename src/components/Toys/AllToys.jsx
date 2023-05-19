import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';

const AllToys = () => {
    const { toys, user } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()
    console.log(toys)
    
    return (
        <div>
            <h2>All Toys</h2>
            <div>
                {toys.map(toy => <><h2>{toy.name}</h2> <Link to={`/toy/${toy._id}`}>View Details</Link></>)}
            </div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>

        </div>
    );
};

export default AllToys;
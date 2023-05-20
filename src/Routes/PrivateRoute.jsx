import React, { useContext, useState,  } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { ClipLoader } from 'react-spinners';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { loading, user } = useContext(AuthContext)
    let [color, setColor] = useState("#ffffff");

    const override ={
        display: "block",
        margin: "0 auto",
        border: '15px solid #FF1276',
        
      };
      
    if (loading) {
        return <div className='flex w-full justify-center h-[70vh] items-center'>
            {/* <progress className="progress progress-accent bg-[#FF1276]  h-8  w-72"></progress> */}
            <ClipLoader
        color=' #FF1276'
        loading={loading}
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

        </div>
    }
    if (user) {
        return <>{children}</>
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;
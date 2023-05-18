import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const {loading, user} = useContext(AuthContext)
    if (loading) {
        return <div className='flex w-full justify-center h-[70vh] items-center'>
            <progress className="progress progress-accent bg-[#FF1276]  h-8  w-72"></progress>
        </div>
    }
    if (user) {
        return <>{children}</>
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;
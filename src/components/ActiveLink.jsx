import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({children, to}) => {
    return (
        <NavLink to={to} className={({isActive})=>isActive? 'text-[#FF1276] font-bold': 'text-purple-800 font-semibold'}>
            {children}
        </NavLink>
    );
};

export default ActiveLink;
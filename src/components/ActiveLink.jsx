import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({children, to}) => {
    return (
        <NavLink to={to} className={({isActive})=>isActive? 'text-[#FF1276] font-bold': ''}>
            {children}
        </NavLink>
    );
};

export default ActiveLink;
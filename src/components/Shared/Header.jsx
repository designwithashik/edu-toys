import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Header = () => {
    const  {user} = useContext(AuthContext)
    return (
        <div>
            <h2>Logo</h2>
            <h3>{user}</h3>
        </div>
    );
};

export default Header;
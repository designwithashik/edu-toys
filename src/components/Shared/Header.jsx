import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink';


const Header = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="navbar bg-base-100">
 <div className="flex-1">
                <Link to='/' className=" font-bold normal-case text-accent text-xl">edu<span className='text-[#FF1276] font-bold'>TOYS</span></Link>
                <ul className="menu menu-horizontal px-1">
                     <li><ActiveLink to='/all-toys'>All Toys</ActiveLink></li>
                     <li><ActiveLink to='/my-toys'>My Toys</ActiveLink></li>
                     <li><ActiveLink to='/add-a-toy'>Add A Toy</ActiveLink></li>
                     <li><ActiveLink to='/blogs'>Blogs</ActiveLink></li>

                </ul>
                
</div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      {user? <img src={user}></img>: <li className='btn-accent text-white font-bold rounded-xl'><ActiveLink to='/login'>Log in</ActiveLink></li>}
      
    </ul>
  </div>
</div>
    );
};

export default Header;
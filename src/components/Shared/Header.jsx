import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink';


const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut();
    }
    return (
        <div className="navbar bg-base-100">
 <div className="flex-1">
                <Link to='/' className=" font-bold normal-case text-accent text-xl">edu<span className='text-[#FF1276] font-bold'>TOYS</span></Link>
                <ul className="menu menu-horizontal px-1">
                     <li><ActiveLink to='/all-toys'>All Toys</ActiveLink></li>
                     {user && <><li><ActiveLink to='/my-toys'>My Toys</ActiveLink></li>
                     <li><ActiveLink to='/add-a-toy'>Add A Toy</ActiveLink></li></>}
                     <li><ActiveLink to='/blogs'>Blogs</ActiveLink></li>

                </ul>
                
</div>
  <div className="flex-none gap-3">
    
                    {user ? <> <img className='w-9 h-9 rounded-full' title={user?.displayName} src={user?.photoURL}></img>
                    <button className='btn btn-outline btn-accent rounded-lg' onClick={handleLogOut}>Log out</button></> : <ActiveLink  to='/login'><p className='btn btn-accent font-bold rounded-xl'>Log in</p></ActiveLink>}
      
    
  </div>
</div>
    );
};

export default Header;
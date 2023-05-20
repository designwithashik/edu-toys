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
        <div className="navbar bg-base-100 gap-9 md:flex-row flex flex-col">
 <div className="flex-1 flex-col md:flex-row">
                <Link to='/' className=" font-bold normal-case text-accent text-4xl">Edu<span className='text-[#FF1276] font-bold'>Toys</span></Link>
                <ul className="menu md:flex-row flex-col flex menu-horizontal px-1">
                     <li><ActiveLink to='/all-toys'>All Toys</ActiveLink></li>
                     {user && <><li><ActiveLink to='/my-toys'>My Toys</ActiveLink></li>
                     <li><ActiveLink to='/add-a-toy'>Add A Toy</ActiveLink></li></>}
                     <li><ActiveLink to='/blogs'>Blogs</ActiveLink></li>

                </ul>
                
</div>
  <div className="flex flex-col md:flex-row gap-3">
    
                    {user ? <> <img className='w-9 h-9 rounded-full' title={user?.displayName} src={user?.photoURL}></img>
                    <button className='btn btn-outline btn-accent rounded-lg' onClick={handleLogOut}>Log out</button></> : <ActiveLink  to='/login'><p className='btn btn-accent font-bold rounded-xl'>Log in</p></ActiveLink>}
      
    
  </div>
</div>
    );
};

export default Header;
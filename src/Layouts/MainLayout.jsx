import React from 'react';
import Header from '../components/Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer';

const MainLayout = () => {
    return (
        <div>
            <div  className='max-w-screen-xl min-h-[calc(100vh-156px)] mx-auto'>
            <Header />
            <Outlet />
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;
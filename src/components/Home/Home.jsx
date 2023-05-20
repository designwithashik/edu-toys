import React from 'react';
import ToysTab from './ToysTab';
import Banner from './Banner';
import TopPicks from './TopPicks';
import Gallery from './Gallery';
import CustomerReview from './CustomerReview';

const Home = () => {
    return (
        <div>
            <Banner />
            
            <Gallery/>

            <ToysTab />
            
            <TopPicks />
            
            <CustomerReview/>
        </div>
    );
};

export default Home;
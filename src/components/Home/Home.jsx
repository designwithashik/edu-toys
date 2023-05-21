import React from 'react';
import ToysTab from './ToysTab';
import Banner from './Banner';
import TopPicks from './TopPicks';
import Gallery from './Gallery';
import CustomerReview from './CustomerReview';
import PageTitle from '../PageTitle';

const Home = () => {
    return (
        <div>
            <PageTitle>Home</PageTitle>

            <Banner />
            
            <Gallery/>

            <ToysTab />
            
            <TopPicks />
            
            <CustomerReview/>
        </div>
    );
};

export default Home;
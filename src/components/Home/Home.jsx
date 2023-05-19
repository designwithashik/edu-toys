import React from 'react';
import ToysTab from './ToysTab';
import Banner from './Banner';
import TopPicks from './TopPicks';

const Home = () => {
    return (
        <div>
            <Banner/>

            <ToysTab />
            
            <TopPicks/> 
        </div>
    );
};

export default Home;
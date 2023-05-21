import React, { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { AuthContext } from '../../Providers/AuthProvider';
import ToyCard from './ToyCard';

const ToysTab = () => {
  const { toys } = useContext(AuthContext)
  const languageToys = toys.filter(toy => toy.subCategory === 'Language Toys')
  const EngineeringToys = toys.filter(toy => toy.subCategory === 'Engineering Toys')
  const ScienceToys = toys.filter(toy => toy.subCategory === 'Science Toys')
  return (
    <div className="mb-28">

      <h2 className='text-4xl mb-14 font-bold text-center'>Shop By Category</h2>
      <Tabs>
        <TabList className="flex flex-col gap-4 md:flex-row font-semibold mb-3">
          <Tab className="btn border-none bg-[#FF1276] text-white rounded-full">
            Language Toys
          </Tab>
          <Tab className="btn border-none bg-accent text-white rounded-full">
            Engineering Toys
          </Tab>

          <Tab className="btn border-none bg-purple-600 text-white rounded-full">
            Science Toys
          </Tab>
        </TabList>



        <TabPanel >
          <div className="p-4 rounded-box bg-[#ff127569] grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {languageToys.map(languageToy =>{
             return <ToyCard key={languageToy._id} toy={languageToy}></ToyCard>
            })}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="p-4  rounded-box bg-yellow-300  grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {EngineeringToys.map(engineeringToy =>{
             return  <ToyCard key={engineeringToy._id} toy={engineeringToy}></ToyCard>
            })}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="p-4 bg-purple-300 rounded-box  grid md:grid-cols-2 lg-grid-cols-3 gap-5">
            {ScienceToys.map(scienceToy =>{
            return  <ToyCard key={scienceToy._id} toy={scienceToy}></ToyCard>
            })}
          </div>
        </TabPanel>

      </Tabs>
    </div>
  );
};

export default ToysTab;

import React, { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { AuthContext } from '../../Providers/AuthProvider';

const ToysTab = () => {
    const {toys} = useContext(AuthContext)
    const languageToys = toys.filter(toy=>toy.subCategory=== 'Language Toys')
    const EngineeringToys = toys.filter(toy=>toy.subCategory=== 'Engineering Toys')
    const ScienceToys = toys.filter(toy=>toy.subCategory=== 'Science Toys')
  return (
    <div className="p-4">

      <h2 className='text-4xl font-bold text-center'>Shop By Category</h2>
      <Tabs>
        <TabList className="flex space-x-4">
          <Tab className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
            Science Toys
          </Tab>
          <Tab className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
            Engineering Toys
          </Tab>
          <Tab className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
            Language Toys
          </Tab>
        </TabList>

        <TabPanel>
          <div className="p-4 bg-gray-100 rounded">
                      {ScienceToys.map(languageToy => <>
                          <h2>{languageToy.name}</h2>
                      </>)}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="p-4 bg-gray-100 rounded">
                      {EngineeringToys.map(languageToy => <>
                          <h2>{languageToy.name}</h2>
                      </>)}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="p-4 bg-gray-100 rounded">
                      {languageToys.map(languageToy => <>
                          <h2>{languageToy.name}</h2>
                      </>)}
          </div>
        </TabPanel>
        
      </Tabs>
    </div>
  );
};

export default ToysTab;

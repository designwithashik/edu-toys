import React, { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { AuthContext } from '../../Providers/AuthProvider';

const ToysTab = () => {
    const {toys} = useContext(AuthContext)
    const languageToys = toys.filter(toy=>toy.subCategory=== 'Language Toys')
  return (
    <div className="p-4">
      <Tabs>
        <TabList className="flex space-x-4">
          <Tab className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
            Title 1
          </Tab>
          <Tab className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
            Title 2
          </Tab>
        </TabList>

        <TabPanel>
          <div className="p-4 bg-gray-100 rounded">
                      {languageToys.map(languageToy => <>
                          <h2>{languageToy.name}</h2>
                      </>)}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="p-4 bg-gray-100 rounded">
            <h2 className="text-xl font-bold mb-4">Content 2</h2>
            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ToysTab;

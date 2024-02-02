import React from 'react';
import Nav from '../components/Nav';
import { Outlet } from 'react-router-dom';
import LocalGuideView from './Traveller/localGuideView';
import InduvidualGuide from './Traveller/InduvidualGuide';
import Details from './Traveller/TravellerDetails';
import TravellerDetals from './Traveller/TravellerDetals';

const Layout = () => {
    return (
        <div className='bg-gray-50'>
           <Nav/>
            <div className="grid grid-cols-9 w-full">
                <div className="col-span-4 h-screen bg-gray-200 p-4">
                {/* <Details/> */}
                <TravellerDetals/>
                </div>
                <div className="col-span-5 p-4">
                   {/* <LocalGuideView/> */}
                   <InduvidualGuide/>
                    {/* <Outlet/> */}
                </div>
              </div>
        </div>
    );
}

export default Layout;

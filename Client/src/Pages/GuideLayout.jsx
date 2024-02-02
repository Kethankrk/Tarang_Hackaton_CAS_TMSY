import React from 'react';
import Nav from '../components/Nav';
import TravellerReqest from './LocalGuide/TravellerReqest'
import Details from './Traveller/TravellerDetails';

const GuideLayout = () => {
    return (
        <div className='bg-gray-50'>
        <Nav/>
         <div className="grid grid-cols-9 w-full">
             <div className="col-span-4 h-screen">
<Details/>
             </div>
             <div className="col-span-5 p-4">
                {/* <LocalGuideView/> */}
                {/* <InduvidualGuide/> */}
                 {/* <Outlet/> */}
                 <TravellerReqest/>
             </div>
           </div>
     </div>
    );
}

export default GuideLayout;

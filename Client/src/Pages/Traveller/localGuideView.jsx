import React from 'react';

const LocalGuideView = () => {
    return (
       <>
        <h1 className='font-bold text-xl
                    '>Nearby Local Guides</h1>
                    <div className="flex flex-col gap-5 mt-3">
                        <div className="flex justify-between items-center bg-gray-100 px-3 py-3 rounded-xl shadow-md">
                            <div className="flex gap-3">
                                <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt=""
                                className='h-20 rounded-full' />
                                <div className="flex flex-col ">
                                    <h1 className='font-semibold text-xl'>Name</h1>
                                    <h1>number</h1>
                                    <h1>place</h1>
                                </div>
                            </div>
                            <button type="button" className="px-8 py-1 font-semibold rounded-full bg-[#6C63FF] shadow-md text-gray-100">Choose</button>
                        </div>
                        
                    </div>  </>
    );
}

export default LocalGuideView;

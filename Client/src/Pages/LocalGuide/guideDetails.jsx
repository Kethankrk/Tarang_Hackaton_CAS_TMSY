import React from 'react';

const GuideDetails = () => {
    return (
        <div className='flex flex-col w-full gap-5'>
            <div className="flex bg-white rounded-3xl shadow-md px-9 py-3 justify-between items-center border-r-4 border-blue-500">
                <div className="flex flex-col gap-1">
                    <h1 className='font-bold text-xl'>Hello User</h1>
                    <h1 className=' text-green-500 text-lg'>Email</h1>
                    <h1 className='font-bold text-lg'>Location</h1>
                </div>
                <img className='w-32 h-w-32' src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="" />
            </div>
            <div className="flex flex-col bg-white rounded-3xl shadow-md px-9 py-3  border-r-4 border-blue-500 gap-3">
                <h1 className='text-center text-red-500 font-bold text-2xl'>Complete your profile</h1>
                <div className="flex flex-col">
                <div>
                  <label for="email" className="block mb-2 text-sm">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="leroy@jenkins.com"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                    required
                    // value={email}
                    // onChange={(e) => setemail(e.target.value)}
                  />
                </div>
                </div>
           </div>
        </div>
    );
}

export default GuideDetails;

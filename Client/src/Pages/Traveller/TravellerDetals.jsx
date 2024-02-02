import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
const TravellerDetals = () => {
    const [SelectOption, Setselect] = useState()


    const [options, SetOPtions] = useState("");
    useEffect(() => {
        axios.get("http://localhost:3000/address").then(
            res=>{
                SetOPtions(res.data)
            }
        )
       
    }, []);
      console.log(options)
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
            <div>
				<label for="Name" className="block mb-2  text-lg font-semibold  ">Current location</label>
				<Select className='w-96'
        value={SelectOption}
        onChange={Setselect}
        options={options}
      />    
     
      
			</div>
            <div className="w-full rounded">
      <iframe className='w-full h-64' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4016584.092792871!2d76.13836675!3d10.544276349999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1706867893377!5m2!1sen!2sin" loading='lazy'></iframe>
      </div>
                <div className="">
                

                </div>
                <div>
				<label for="Destination" className="block mb-2 text-sm">Destination</label>
				<input type="text" name="Name" id="Name"  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" 
                required
                value={name}
                onChange={e=> Setname(e.target.value)}
                />
			</div>
           <div className="flex justify-end"> <button type="button" className=" max-w-40 px-10 py-2 font-semibold rounded-full bg-[#6C63FF] shadow-md text-gray-100">Next</button></div>
            </div>
        </div>
    );
}

export default TravellerDetals;

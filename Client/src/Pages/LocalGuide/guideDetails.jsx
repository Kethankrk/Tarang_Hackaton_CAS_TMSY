import { Select } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const GuideDetails = () => {
    const [user, setuser] = useState("");
    const [email,setemail] = useState("") 
    const Options = [
       "A","B","C"    ]

       useEffect(() => {
        setemail(localStorage.getItem("email"))
       axios.post("http://localhost:3000/client/get-guide",{email}).then(
        res =>{
            setuser(res.data.data)
        }
       )

       }, );
    return (
        <div className='flex flex-col w-full gap-5'>
            <div className="flex bg-white rounded-3xl shadow-md px-9 py-3 justify-between items-center border-r-4 border-blue-500">
                <div className="flex flex-col gap-1">
                    <h1 className='font-bold text-xl'>Hello {user.name}</h1>
                    <h1 className=' text-green-500 text-lg'>{user.email}</h1>
                    <h1 className='font-bold text-lg'>{user.address}</h1>
                </div>
                <img className='w-32 h-w-32' src={user.img} alt="" />
            </div>
            <div className="flex flex-col bg-white rounded-3xl shadow-md px-9 py-3  border-r-4 border-blue-500 gap-3">
                <h1 className='text-center text-red-500 font-bold text-2xl'>Complete your profile</h1>
                <div className="flex flex-col gap-3">
                <div>
                  <label for="email" className="block mb-2 text-sm">
                    Vehicle Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                    required
                    // value={email}
                    // onChange={(e) => setemail(e.target.value)}
                  />
                  
                </div>
                <div>
                <label for="email" className="block mb-2 text-sm">
                    Vehicle Name
                  </label>
				<select className='w-96 border'>
                   {Options.map(e=>(
                     <option value={e}>{e}</option>
                   ))}
                </select>
     
      
			</div>
                </div>
           </div>
        </div>
    );
}

export default GuideDetails;

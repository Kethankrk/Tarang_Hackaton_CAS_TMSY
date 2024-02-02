import axios from 'axios';
import { IKContext, IKUpload } from 'imagekitio-react';
import React, { useState } from 'react';

const SignUp = () => {

   const [name ,Setname] = useState("");
   const [email, setemail] = useState("");
   const [number, SetNumber] = useState("");
   const [address, setaddress] = useState("");
   const [idproff,SetIdProof] = useState("");
   const [userimage, Setuserimage] = useState("");
   const [password, setPass] = useState("");
   const [passconfo, Setpassconfo] = useState("");

   
   const uploadImageToImgBB = async (imageFile) => {
    try {
      const formData = new FormData();
      formData.append('image', imageFile);
  
      const response = await axios.post('https://api.imgbb.com/1/upload?key=YOUR_API_KEY', formData);
  
      // The response.data.data.image.url contains the URL of the uploaded image
      const imageUrl = response.data.data.image.url;
      console.log('Image uploaded successfully:', imageUrl);
  
      return imageUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error; // You can handle the error based on your application's needs
    }
  };

   const signup =()=>{
    const userData ={
        name : name,
        email: email,
        password : password,
        address : address,
        phone : number,
        idProof: idproff,
        userImage: userimage
    }
    axios.post('/user',userData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
   }


   
    return (
        <div className='flex w-full h-screen bg-[#6C63FF]  items-center px-48 justify-center'>
<div className="flex flex-col max-w-xl p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Sign up</h1>
		<p className="text-sm text-gray-600">Sign up to access your account</p>
	</div>
	<form novalidate="" action="" className="space-y-2">
        <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
            <div className="space-y-4">
			<div>
				<label for="Name" className="block mb-2 text-sm">Name</label>
				<input type="text" name="Name" id="Name" placeholder="leroy****" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" 
                required
                value={name}
                onChange={e=> Setname(e.target.value)}
                />
			</div>
			<div>
				<label for="email" className="block mb-2 text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" 
                required
                value={email}
                onChange={e=> setemail(e.target.value)}/>
			</div>
            

		</div>
            </div>
            <div className="col-span-1">
            <div className="space-y-4">
			<div>
				<label for="number" className="block mb-2 text-sm">Phone Number</label>
				<input type="number" name="number" id="number" placeholder="+91 **********" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" 
                value={number}
                onChange={e=> SetNumber(e.target.value)}
                required
                />
			</div>
			<div>
				<label for="Address" className="block mb-2 text-sm">Address</label>
				<input type="text" name="Address" id="Address" placeholder="************" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" 
                required
                value={address}
                onChange={e=> setaddress(e.target.value)}/>
			</div>
		</div>
            </div>
        </div>
        <div>
				<label for="userimage" className="block mb-2 text-sm">Profile Image</label>
				<input type="file" name="doc" id="ddoc" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" 
                required/>
                <label htmlFor="doc" className="block mb-2 text-sm">Id Proof</label>
<input
  type="file"
  name="doc"
  id="doc"
  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
  required
  onChange={(e) => idProof(e.target.files[0])}
/>
			</div>
		<div className="flex gap-3">
            <div>
				<div className="flex justify-between mb-2">
					<label for="password" className="text-sm">Password</label>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" 
                 required
                 value={password}
             onChange={e=>setPass(e.target.value)}/>
			</div>
            <div>
				<div className="flex justify-between mb-2">
					<label for="password" className="text-sm">Password</label>
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-600">
  {passconfo === password ? (
    <p></p>
  ) : (
    <p>Passwords do not match</p>
  )}
</a>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" 
                required 
                value={passconfo}
                onChange={e=> Setpassconfo(e.target.value)}/>
			</div>

            </div>
            

		<div className="space-y-2">
            
			<div>
				<button type="sumbit" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-gray-50">Sign up</button>
			</div>
			<p className="px-6 text-sm text-center text-gray-600">Do you have an account already?
				<a rel="noopener noreferrer" href="#" className="hover:underline text-violet-600">Sign in</a>.
			</p>
		</div>
	</form>
</div>  
        </div>
    );
}

export default SignUp;

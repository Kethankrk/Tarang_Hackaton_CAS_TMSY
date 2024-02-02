import { IKContext, IKUpload } from 'imagekitio-react';
import React from 'react';

const SignUp = () => {
   
    return (
        <div className='flex w-full h-screen bg-[#6C63FF]  items-center px-48 justify-center'>
<div className="flex flex-col max-w-xl p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Sign up</h1>
		<p className="text-sm text-gray-600">Sign up to access your account</p>
	</div>
	<form novalidate="" action="" className="space-y-12">
        <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
            <div className="space-y-4">
			<div>
				<label for="Name" className="block mb-2 text-sm">Name</label>
				<input type="text" name="Name" id="Name" placeholder="leroy****" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
			</div>
			<div>
				<label for="email" className="block mb-2 text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
			</div>
            

		</div>
            </div>
            <div className="col-span-1">
            <div className="space-y-4">
			<div>
				<label for="number" className="block mb-2 text-sm">Phone Number</label>
				<input type="number" name="number" id="number" placeholder="+91 **********" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
			</div>
			<div>
				<label for="Address" className="block mb-2 text-sm">Address</label>
				<input type="text" name="Address" id="Address" placeholder="************" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
			</div>
		</div>
            </div>
        </div>
        <div>
				<label for="doc" className="block mb-2 text-sm">Id Proof</label>
				<input type="file" name="doc" id="doc" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
			</div>
		<div className="flex  gap-3">
            <div>
				<div className="flex justify-between mb-2">
					<label for="password" className="text-sm">Password</label>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
			</div>
            <div>
				<div className="flex justify-between mb-2">
					<label for="password" className="text-sm">Password</label>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
			</div>
            </div>

		<div className="space-y-2">
            
			<div>
				<button type="sumbit" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-gray-50">Sign up</button>
			</div>
			<p className="px-6 text-sm text-center text-gray-600">Don't have an account yet?
				<a rel="noopener noreferrer" href="#" className="hover:underline text-violet-600">Sign up</a>.
			</p>
		</div>
	</form>
</div>  
        </div>
    );
}

export default SignUp;

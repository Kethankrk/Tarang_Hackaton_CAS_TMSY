import React from 'react';

const Nav = () => {
    return (
        <header className="p-4 bg-slate-50 text-gray-800  shadow">
	<div className="container flex justify-between h-16 mx-auto">
		<div className="flex">
			<h1 className='font-bold text-3xl'>TRIPTALES</h1>
			
		</div>
		<div className="items-center flex-shrink-0 hidden lg:flex">
			<button className="px-8 py-3 font-semibold rounded bg-violet-600 text-gray-50">Sign out</button>
		</div>
		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
    );
}

export default Nav;

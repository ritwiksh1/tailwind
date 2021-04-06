import React from 'react'

const Header = () => {
    return (
        
            <nav className="Container p-4 flex-1 flex items-center justify-between bg-grey-500 ">
<div className="flex">

   <h1 className="text-cus3 font-bold">Omega</h1> 
</div>
<div className="flex space-x-6 items-center ">

    <a href="/">Demos</a>
    <a href="/">Pages</a>
    <a href="/">Support</a>
    <button className="bg-red-500 hover:bg-red-700 rounded-md py-2 px-4 text-cus-white">Get Started</button>
</div>

            </nav>
        
    )
}

export default Header

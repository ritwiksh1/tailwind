import React from 'react'
import Header from './Header'
const Hero = () => {
    return (
        <>
        <div className="bg-hero-pattern ">
            <Header/>
            <div className="w-1/3 flex flex-col ml-40  pt-10 pb-28 text-left">
                <h1 className="text-cus">Career</h1>
                <p className="text-cus-2 text-cus-grey p-2">Create custom landing pages with Omega that converts more visitors than any website. </p>


            </div>
        </div>
        </>
    )
}

export default Hero

import React from 'react'

const Main = () => {
    console.log("cdscds>>>",window.location.origin)
    return (
        <div>

<div className="flex flex-row ml-40  pt-10 pb-28 text-left items-end w-4/5">
    <h1 className="mr-8 text-cus w-5/12 leading-snug">Watch how we work here.</h1>
    <p className="ml-8 text-cus2 text-cus-grey w-3/6 pb-6">These companies release their own versions of the operating systems with minor changes, and yet always with the same bottom line. </p>
    </div>   


<div className="w-4/5 ml-40 pb-28">
{/* img */}
{/* <img src={window.location.origin+'bg@3x.png'} alt="placeholder"/> */}
<img src='/bg@3x.png' alt="placeholder"/>
</div> 
<div>
    
    </div>          
        </div>
    )
}

export default Main

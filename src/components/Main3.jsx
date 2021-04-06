import React from 'react'
import Card from './Card'
const Main3 = () => {
    return (
        <div className="bg-cus-theme pt-10 pb-20">
           <div className="flex flex-col w-full  items-center">
               <h1 className="text-cus">Open roles</h1>
               <p className="text-cus2 text-cus-grey w-2/5 text-center">These companies release their own versions of the operating systems with minor changes, and yet always.</p>
           </div>

           <div className=" flex flex-col w-4/5 items-center ml-36">
               <div className="flex flex-row ">

               <Card location="South Haven, USA" designation="Senior UX Designer"/>
               <Card location="Paucekchester, UK" designation="Marketing Manager"/>
               <Card location="Noemieport, Norway" designation="Marketing Manager"/>
               </div>
               <div className="flex flex-row">

               <Card location="Mooreville, Canada" designation="Project Manager"/>
               <Card location="Anywhere" designation="Senior Software Engineer"/>
               <Card location="Vonstad, Spain" designation="Marketing Director"/>
               </div>
           </div>
        </div>
    )
}

export default Main3

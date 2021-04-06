import React from 'react'

const Bullet = (props) => {
 
    return (
        <div>
        <div className="flex m-2 items-center m-8">
            <div className={`rounded-full h-12 w-12 flex items-center justify-center bg-${props.color}-300 mr-2`}>
                <div  className={`rounded-full h-3 w-3 flex items-center justify-center bg-${props.color}-700`}></div>
                </div>
            <div className="flex flex-col w-4/5 text-left ml-2 m-2" >
                <div className="text-cus3">{props.heading}</div>
                <div className="text-cus4 text-cus-grey">{props.text}</div>
            </div>
        </div>
        </div>
    )
}

export default Bullet

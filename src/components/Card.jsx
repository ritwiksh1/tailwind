import React from 'react'

const Card = (props) => {
    return (
        <div >
            <div class="flex flex-col bg-white shadow-xl  m-8 mb-12 p-4 w-72 h-3/5  border-2 border-white-500 rounded-lg transition duration-500 ease-in-out  hover: transform hover:-translate-y-3 hover:scale-11 ">
  <h2 class="text-cus4 text-cus-grey  mb-4 mt-0">  <span class="material-icons">&#xE0C8;</span>{props.location}</h2>
  <p class="text-cus2 font-bold">{props.designation}</p>
</div>
        </div>
    )
}

export default Card

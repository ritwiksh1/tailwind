import React from 'react'
import Bullet from './Bullet.jsx'
const Main2 = () => {
    return (
        <div className="flex flex-col w-4/5 ml-40 ">
<div className="flex flex-row">
<Bullet heading="Work from anywhere1" text="Many of us are able to work from home, a café, or a park whenever we want. Yay freedom!" color="blue"/>
<Bullet heading="Work from anywhere2" text="Many of us are able to work from home, a café, or a park whenever we want. Yay freedom!"color="red"/>
<Bullet heading="Work from anywhere3" text="Many of us are able to work from home, a café, or a park whenever we want. Yay freedom!" color="yellow"/>
</div>

<div className="flex flex-row">
<Bullet heading="Work from anywhere4" text="Many of us are able to work from home, a café, or a park whenever we want. Yay freedom!" color="green"/>
<Bullet heading="Work from anywhere5" text="Many of us are able to work from home, a café, or a park whenever we want. Yay freedom!" color="blue"/>
<Bullet heading="Work from anywhere6" text="Many of us are able to work from home, a café, or a park whenever we want. Yay freedom!" color="gray"/>
</div>
        </div>
    )
}

export default Main2

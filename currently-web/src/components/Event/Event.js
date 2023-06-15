import React, { useState } from 'react'
import './Event.css'
import Sidebar from '../Sidebar/Sidebar';

const Event = ({event_name, event_desc, attendees}) => {
    
    const [toggle, setToggle] = useState(false);
    
    return (
        <div className='node-container'>
            <div className="event-container">
                <div classname="event-node" onClick ={() => setToggle(!toggle)}>
                    <p className="text">{event_name}</p>
                </div>
            {toggle && (<Sidebar sidebar_name={event_name} sidebar_desc={event_desc} attendees={attendees}></Sidebar>)}
        </div>
        </div>
        
    );
}
export default Event;
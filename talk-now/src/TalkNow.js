import React from 'react';
import "./TalkNow.css";
import SideBar from './SideBar';
import Chat from './Chat';

const TalkNow = () => {
    return (
        <div className="talknow">

            <SideBar></SideBar>
            
            <Chat></Chat>
        </div>
    );
}

export default TalkNow;

import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarChat.css';



const SidebarChat = () => {
    return (
        <div className="sidebarChat">
            <Avatar></Avatar>
            <div className="sidebarChat__info">
                <h3>
                    Group Name
                </h3>
                <p>
                    Last message sent..
                </p>
                <small>timestamp</small>
            </div>
        </div>
    );
};




export default SidebarChat;

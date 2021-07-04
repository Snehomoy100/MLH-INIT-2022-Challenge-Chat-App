import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import './SideBar.css';
import SearchIcon from '@material-ui/icons/Search';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import SidebarChat from './SidebarChat';

const SideBar = () => {
    return (
    <div className="sidebar">


        <div className="sidebar__header">
            <Avatar className="sidebar__avatar"></Avatar>
            <div className="sidebar__input">
                <SearchIcon></SearchIcon>
                <input placeholder="Search"></input>
            </div>


            <IconButton variant="outlined" className="sidebar__inputButton">
                <RateReviewOutlinedIcon></RateReviewOutlinedIcon>
            </IconButton>
            
        </div>


        <div className="sidebar__chats">
            <SidebarChat></SidebarChat>
        </div>
    </div>
    );
};


export default SideBar;
import React from 'react';
import './Chat.css';



const Chat = () => {
    return(
        <div className="chat">
            {/* chat header  */}
            <div className="chat__header">
                <h4>To: <span className="chat__name">Channel Name</span></h4>
                <strong>Details</strong>
            </div>

            {/* chat body or messages  */}
            <div className="chat__body">

            </div>



            {/* chat input  */}
            <div className="chat__input">

            </div>

        </div>
    );
};

export default Chat;
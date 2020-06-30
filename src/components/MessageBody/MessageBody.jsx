import React from "react";
import Message from "./Message/Message";
import UserIcon from "./UserIcon/UserIcon";
import s from './MessageBody.module.css'

const MessageBody = (props) => {
    return (
        <div className={s.MessageBody}>
            <UserIcon/>
            <Message/>

        </div>
    )
}

export default MessageBody;
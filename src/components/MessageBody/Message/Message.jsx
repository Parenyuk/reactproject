import React from "react";
import UserName from "./UserName/UserName";
import UserText from "./UserText/UserText";
import s from './Message.module.css'
import Time from "./Time/Time";


const Message = () => {
    return (
        <div className={s.message}>
            <UserName/>
            <UserText/>
            <Time/>
        </div>
    )
}

export default Message;
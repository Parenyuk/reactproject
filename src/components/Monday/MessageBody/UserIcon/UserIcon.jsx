import React from "react";
import s from './UserIcon.module.css'

const UserIcon = () => {
    return (
        <div className={s.userIcon}>
            <img className={s.img} src={'https://themes.iamabdus.com/dealsy/1.0/img/user/user-thumb.jpg'}/>
        </div>
    )
}

export default UserIcon;
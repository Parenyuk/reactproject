import React from "react";
import s from './HumanQuality.module.css';

const HumanQuality = (props) => {
    return (
        <div className={props.id === 2 ? s.SecondElement : s.HumanQuallity}>
            {props.humanQualities}
        </div>
    )
}

export default HumanQuality;



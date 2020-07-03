import React from "react";
import s from "../../App.module.css";


const ListElement = (props) => {
    return (
        <div>
            <div className={s.App}>
                {props.title}
            </div>

        </div>
    )
}

export default ListElement;

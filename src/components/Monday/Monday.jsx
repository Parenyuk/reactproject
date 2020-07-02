import React from "react";
import s from "../../App.module.css";
import MessageBody from "../MessageBody/MessageBody";
import HumanQualities from "../HumanQuailities/HumanQualities";
import Counter from "../Counter/Counter";


 const Monday = () => {
    return (
        <div>
            <div className={s.App}>
                <div>
                    <MessageBody/>
                </div>
                <div>
                    <HumanQualities/>
                </div>
                <div>
                    <Counter/>
                </div>

            </div>
        </div>
    )
}

export default Monday;
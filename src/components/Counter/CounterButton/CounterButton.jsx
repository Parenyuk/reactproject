import React from "react";


 const CounterButton = (props) => {
    return (
        <div>
            <button onClick={props.onButtonClick} onChange={props.onInputMessage}>button</button>
        </div>

    )
}
export default CounterButton;
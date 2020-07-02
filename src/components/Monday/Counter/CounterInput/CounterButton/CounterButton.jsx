import React from "react";


 const CounterButton = (props) => {
    return (
        <div>
            <button onClick={props.onButtonClick} >button</button>
        </div>

    )
}
export default CounterButton;
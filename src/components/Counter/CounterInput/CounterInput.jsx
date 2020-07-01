import React from "react";


const CounterInput = (props) => {
    return (
        <div>
            <input onChange={props.onInputMessage} value={props.message}/>
        </div>
    )
}
export default CounterInput;
import React from "react";
import s from './Counter.module.css'

export default class Counter extends React.Component {
    state = {
        count: 0,
        message: ''
    }
    onInputMessage = (e) => {
        this.setState({message: e.currentTarget.value});

    }
    onButtonClick = () => {
        alert(this.state.message);
        this.setState({message: ''});

        this.incrementCounter()
    }
    incrementCounter = () => this.setState((currentValue) => ({count: currentValue.count + 1}));


    render() {
        return (
            <div className={s.counter}>
                <div className={s.count}>
                    <span>{this.state.count}</span>
                </div>
                <input onChange={this.onInputMessage} value={this.state.message}/>
                <button onClick={this.onButtonClick} onChange={this.onInputMessage}>button</button>
            </div>
        )
    }


}
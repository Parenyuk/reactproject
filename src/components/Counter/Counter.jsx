import React from "react";
import s from './Counter.module.css'
import CounterButton from "./CounterButton/CounterButton";
import CounterInput from "./CounterInput/CounterInput";
import CounterScreen from "./CounterScreen/CounterScreen";

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
                   <CounterScreen count={this.state.count} />
                </div>
                <CounterInput onInputMessage={this.onInputMessage} message={this.state.message}/>
                <CounterButton onButtonClick={this.onButtonClick}  onInputMessage={this.onInputMessage}/>
            </div>
        )
    }


}
import React, {Component} from "react";
import './CounterInput.css'
import CounterScreen from "./CounterScreen/CounterScreen";

 class CounterInput extends Component  {
     state = {
         error: false,
         message: "",
         count: 0
     }
     incrementCounter = () => this.setState((currentValue) => ({count: currentValue.count + 1}));
     onButtonClick = () => {
         let newText = this.state.message;
         this.setState({message: ""});

         if (newText === "") {
             this.setState({error: true});
         } else {
             this.setState({error: false});
             // передаём новый текст наружу
             alert(this.state.message)

         }
         this.incrementCounter();
     }

     onInputChanged = (e) => {
         this.setState({
             error: false,
             message: e.currentTarget.value
         });
     }

     onKeyPress = (e) => {
         if (e.key === "Enter") {
             this.onButtonClick()
         }
     }
    render () {
        let classNameForInput = this.state.error ? "error" : "";
        return (
            <div>
                <div>
                    <CounterScreen count={this.state.count}/>
                </div>
                <input className={classNameForInput} type="text"
                       onChange={this.onInputChanged}
                       onKeyPress={this.onKeyPress}
                       value={this.state.message}
                />
                <button onClick={this.onButtonClick}>button</button>
                {/*<CounterButton onButtonClick={this.onButtonClick}  />*/}
            </div>
        )
    }
}

export default CounterInput;


// import React from "react";
// import './Counter.css'
// import CounterButton from "./CounterButton/CounterButton";
// // import CounterInput from "./CounterInput/CounterInput";
// import CounterScreen from "./CounterScreen/CounterScreen";
//
// export default class Counter extends React.Component {
//     state = {
//         count: 0,
//         error: false,
//         message: '',
//     }
//
//     onButtonClick = () => {
//         // this.setState({message: ''})
//         // if(this.state.message === '') {
//         //     this.setState({error: true});
//         // }
//         // else {
//         //     alert(this.state.message);
//         // }
//         //
//         // this.setState({message: ''});
//         let newText = this.state.message;
//         this.setState({message: ""});
//
//         if (newText === "") {
//             this.setState({error: true});
//         } else {
//             this.setState({error: false});
//             // передаём новый текст наружу
//             alert(this.state.message)
//         }
//
//         this.incrementCounter()
//
//
//     }
//     onInputMessage = (e) => {
//         this.setState({
//             error: false,
//             message: e.currentTarget.value
//         });
//     }
//
//     incrementCounter = () => this.setState((currentValue) => ({count: currentValue.count + 1}));
//     onKeyPress = (e) => {
//          if (e.key === "Enter") {
//              this.onButtonClick()
//          }
//      }
//
//     render() {
//         let classNameForInput = this.state.error ? "error" : "";
//         return (
//             <div>
//                 <div>
//                    <CounterScreen count={this.state.count} />
//                 </div>
//                 {/*<CounterInput onInputMessage={this.onInputMessage} message={this.state.message} error={this.state.error}/>*/}
//                 <input className={classNameForInput} type="text" placeholder="New task name"
//                        onChange={this.onTitleChanged}
//                        onKeyPress={this.onKeyPress}
//                        value={this.state.message}
//                 />
//                 <CounterButton onButtonClick={this.onButtonClick}  onInputMessage={this.onInputMessage}/>
//             </div>
//         )
//     }
//
//
// }
import React from 'react';
import './Counter.css'
import CounterScreen from "./CounterInput/CounterScreen/CounterScreen";
import CounterInput from "./CounterInput/CounterInput";


class Counter extends React.Component {
    // state = {
    //     error: false,
    //     message: "",
    //     count: 0
    // }
    // incrementCounter = () => this.setState((currentValue) => ({count: currentValue.count + 1}));
    // onButtonClick = () => {
    //     let newText = this.state.message;
    //     this.setState({message: ""});
    //
    //     if (newText === "") {
    //         this.setState({error: true});
    //     } else {
    //         this.setState({error: false});
    //         // передаём новый текст наружу
    //         alert(this.state.message)
    //
    //
    //     }
    //     this.incrementCounter();
    // }
    //
    // onInputChanged = (e) => {
    //     this.setState({
    //         error: false,
    //         message: e.currentTarget.value
    //     });
    // }
    //
    // onKeyPress = (e) => {
    //     if (e.key === "Enter") {
    //         this.onButtonClick()
    //     }
    // }


    render = () => {
        // let classNameForInput = this.state.error ? "error" : "";

        return (
            <div>
                <CounterInput/>
            </div>
        );
    }
}

export default Counter;


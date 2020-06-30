import React from "react";
import s from './Time.module.css'

class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: ''};
    }


    componentDidMount() {
        this.timerID = setInterval(
            () => {
                let date = new Date();
                let str = `${date.getHours()}:${date.getMinutes()}`;
                this.setState({date: str})
            },
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div className={s.Time}>
                {this.state.date}
            </div>
        );
    }
}
/*ВАРІАНТ 2 ГОДИННИК З СЕКУНДАМИ!!!
class Time extends React.Component {
    constructor(props) {
        super(props);
        let time = new Date();
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.setState({date: new Date()}),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div className={s.Time}>
                {this.state.date.toLocaleTimeString()}
            </div>
        );
    }
}
 */

/*
class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString()

        };
    }




    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    tick() {
        this.setState({
            time: new Date().toLocaleString()
        });
    }
    render() {
        return (
            <div>
                {this.state.time}.
            </div>


        );
    }
}
*/


export default Time;
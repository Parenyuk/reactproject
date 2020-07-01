import React, {Component} from "react";
import s from './HumanQualities.module.css';
import HumanQuality from "./HumanQuality/HumanQuality";

export default class HumanQualities extends Component {
    state = {
        humanQualitiesData: [
            {id: 1, humanQualities: `рационалист`} ,
            {id: 2, humanQualities: `комуннист`},
            {id: 3, humanQualities: `анимешник`},
            {id: 4, humanQualities: `атеист`}
        ]
    }
    render () {


        return (
            <div className={s.HumanQualities}>
                {this.state.humanQualitiesData.map(d => <HumanQuality key={d.id} id={d.id} humanQualities={d.humanQualities} />)}
            </div>
        )
    }
}

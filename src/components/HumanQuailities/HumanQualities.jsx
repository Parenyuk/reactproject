import React from "react";
import s from './HumanQualities.module.css';
import HumanQuality from "./HumanQuality/HumanQuality";


let humanQualitiesData = [
{id: 1, humanQualities: `рационалист`},
{id: 2, humanQualities: `комуннист`},
{id: 3, humanQualities: `анимешник`},
{id: 4, humanQualities: `атеист`}
]

const HumanQualities = () => {
    let  humanQualitiesDataElement = humanQualitiesData.map( d => <HumanQuality key={d.id} id={d.id} humanQualities={d.humanQualities} />)
    return (
        <div className={s.HumanQualities}>
            {humanQualitiesDataElement}
        </div>
    )
}
export default HumanQualities;
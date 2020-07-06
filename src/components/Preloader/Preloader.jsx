import React from "react";
import preloader from './../../assets/img/Preloader.svg'

const Preloader = () => {
    return (
        <div style={{backgroundColor: 'white', paddingLeft: '650px', paddingTop: '200px'}}>
            <img src={preloader}/>
        </div>
    )

}

export default Preloader;

//стили так прописал для тренировки!
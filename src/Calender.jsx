import React from 'react';
import TopNav from './Topnavigation'
import Styles from './Calender.css'
import Calendar from 'react-calendar'
import './Calender.css';
const Calender=()=>{
    const date=1;
    
    return(
        <>
        <TopNav/>
        <div className="calender">
            <h1>Calender</h1>
            <Calendar/>
        </div>
        </>
    )
}

export default Calender;
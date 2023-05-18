import React from 'react';
import {Link} from 'react-router-dom';
import Styles from './Topnavigation.css'

const TopNav=()=>{
    return(
        <>
            <div className="nav">
                <Link to='/'>Home</Link>
                <Link to='/Calender'>Calender</Link>
            </div>
        </>
    )
}
export default TopNav;
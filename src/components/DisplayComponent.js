import React from 'react';
import './Display.css';

function DisplayComp(props) {
    let displayColor = props.color;

    return (
        <div className='DisplayArea'>
            <span style={{backgroundColor : displayColor}} >{(props.time.m >= 10) ? props.time.m : "0" + props.time.m}</span>&nbsp;:&nbsp;
            <span style={{backgroundColor : displayColor}} >{(props.time.s >= 10) ? props.time.s : "0" + props.time.s}</span>
        </div>
    )
}
export default DisplayComp;
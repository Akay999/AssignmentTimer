import React from 'react';
import './Button.css';
import cancel from '../SVGIcons/cancel.svg';
import pause from '../SVGIcons/Pause.svg';
import play from '../SVGIcons/Play.svg';
import stop from '../SVGIcons/stop.svg';

function BtnComp(props) {
    const aray = [cancel, pause, play, stop, play];
    const btnfunc = [props.cancel, props.pause, props.start, props.stop, props.start];
    const btnName = ["Cancel", "Pause", "Play", "stop", "Play"];

    return (
        <div className='maincont'>
            <button className='Btn-func' onClick={btnfunc[props.type]}>
                <img src={aray[props.type]} alt='func btn' width={50} />
            </button>
            <span>{btnName[props.type]}</span>
        </div>
    )
}

export default BtnComp;
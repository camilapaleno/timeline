import React from 'react';
import { Link } from 'react-router-dom';

var count = 0

function TimelineBox(props) {

    count++

    if (count % 2) {
        return (
            <>
            <div className='timeline__box'>
                <div className='timeline__left' style={props.top}>
                    <div className='timeline__text'>
                        <h3>{props.title}</h3>
                        <p>{props.description}</p>
                    </div>
                    <div className='left__point'>
                        <div className='line'></div>
                        <div className='circle'><i class={props.icon}></i></div>
                    </div>
                </div>                
            </div>

            </>
        );
    } else {
        return (
            <>
            <div className='timeline__box'>
                <div className='timeline__right' style={props.top}>
                    <div className='right__point'>
                        <div className='circle'><i class={props.icon}></i></div>
                        <div className='line'></div>
                    </div>
                    <div className='timeline__text'>
                        <h3>{props.title}</h3>
                        <p>{props.description}</p>
                    </div>
                </div>                  
            </div>

            </>
        );
    }
}

export default TimelineBox;
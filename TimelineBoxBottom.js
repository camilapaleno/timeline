import React from 'react';
import { Link } from 'react-router-dom';

function TimelineBoxBottom(props) {
  return (
    <>
        <div className='timeline_box bottom' style={props.left}>
            <div className='timeline_text'>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
            <div className='timeline_piece'>
                <div className='line'></div>
                <div className='circle'><i class={props.icon}></i></div>
            </div>
        </div>
    </>
  );
}

export default TimelineBoxBottom;
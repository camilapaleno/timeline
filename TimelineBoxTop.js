import React from 'react';
import { Link } from 'react-router-dom';

function TimelineBoxTop(props) {
  return (
    <>
      <div className='timeline_box top' style={props.left}>
          <div className='timeline_piece'>
              <div className='circle'><i class={props.icon}></i></div>
              <div className='line'></div>
          </div>
          <div className='timeline_text'>
              <h3>{props.title}</h3>
              <p>{props.description}</p>
          </div>
      </div>
    </>
  );
}

export default TimelineBoxTop;
import React from 'react';
import './Timeline.css';
import TimelineBoxBottom from './TimelineBoxBottom';
import TimelineBoxTop from './TimelineBoxTop';

function Timeline() {
  return (
    <div className='timeline_containter'>
        <div className='timeline_title'>
            <h2>about me</h2>
        </div>
        <div className='timeline'>
        <div className='line_top'>
            <TimelineBoxTop
              left={{left: 200}}
              icon='fas fa-birthday-cake'
              title='1998 &bull; born'
              description='I was born in Santa Monica, California'
            />
            <TimelineBoxTop
              left={{left: 900}}
              icon='fas fa-school'
              title='2013 &bull; high school'
              description='I attended pali high school. I was co-captain of the Varsity Golf Team and was a part of Pali Production where we made short films, documentaries, and live streamed Pali events. '
            />
            <TimelineBoxTop
              left={{left: 1300}}
              icon='fas fa-plane'
              title='2017 &bull; first trip'
              description='A couple friends and I went to Iceland and Holland. We were eating ramen noodles most nights and staying in pretty dingy airbnbs, but we pulled it off!'
            />
            <TimelineBoxTop
              left={{left: 1600}}
              icon='fas fa-code'
              title='2020 &bull; first coding class'
              description='Since I had finished most of my requirements for Psychology, I decided to branch out and take a programming class on C++. I ended up really liking it and decided to spend the rest of my time at UCLA taking coding courses.'
            />
        </div>
        <div className='line_bottom'>
            <TimelineBoxBottom
              left={{left: 800}}
              icon='fas fa-camera'
              title='2012 &bull; first dslr'
              description='my grandpa gave me his Nikon D90 and a bunch of old lenses. This jumpstarted my interest in photography!'
            />
            <TimelineBoxBottom
              left={{left: 1100}}
              icon='fas fa-briefcase'
              title='2015 &bull; first job'
              description='I decided I wanted to go to Iceland. I didnt have money, so I got a job at Chipotle.'
            />
            <TimelineBoxBottom
              left={{left: 1300}}
              icon='fas fa-plane'
              title='2017 &bull; college'
              description='I attended U.C.L.A. and studied Psychology.'
            />
            <TimelineBoxBottom
              left={{left: 1500}}
              icon='fas fa-globe-asia'
              title='2019 &bull; first solo trip'
              description='I had been wanting to go to Thailand for a while and couldnt convince any friends to come with. I decided to go by myself, which ended up being a very rewarding experience.'
            />
            <TimelineBoxBottom
              left={{left: 1700}}
              icon='fas fa-graduation-cap'
              title='2021 &bull; graduated'
              description='I graduated UCLA with a degree in psychology and a new passion for web development. I was able to take classes in C++, Java, HTML/CSS, Javascript, and PHP.'
            />
        </div>
        </div>
    </div>
  );
}

export default Timeline;
import React from 'react';
import smallWhiteIcon from '../assets/images/small-icon.svg';
function Notifications() {
 return (
  <>
   <section className='notification text-center py-5'>
    <a
     className='text-2xl'
     href='https://flyr.com/resource-hub/flyr-labs-named-best-ai-based-solution-for-transportation/'
    >
     FLYR Named Best AI-Based Solution for Transportation
     <img className='ml-3 w-4 inline-block' src={smallWhiteIcon}></img>
    </a>
   </section>
  </>
 );
}

export default Notifications;

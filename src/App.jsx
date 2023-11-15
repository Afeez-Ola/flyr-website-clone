import { useState } from 'react';
import './App.css';

import smallWhiteIcon from './assets/images/small-icon.svg';
import flyrLogo from './assets/images/logo-black-1.svg';
import arrowDownImage from './assets/images/arrow-dots-down.svg';
import arrowDots from './assets/images/arrow-dots.svg';

function App() {
 return (
  <>
   <main>
    <section className='notification text-center py-5'>
     <a
      className='text-2xl'
      href='https://flyr.com/resource-hub/flyr-labs-named-best-ai-based-solution-for-transportation/'
     >
      FLYR Named Best AI-Based Solution for Transportation
      <img className='ml-3 w-4' src={smallWhiteIcon}></img>
     </a>
    </section>
    <section>
     <nav className='left-nav'>
      <ul>
       <li>
        <a href=''>
         <img src={flyrLogo}></img>
        </a>
       </li>
       <li>
        <a href=''>Airlines</a> <img src={arrowDownImage}></img>
       </li>
       <li>
        <a href=''>Cargo</a> <img src={arrowDownImage}></img>
       </li>
       <li>
        <a href=''>Hospitality</a> <img src={arrowDownImage}></img>
       </li>
      </ul>
     </nav>
    </section>
    <section>
     <nav className='right-nav'>
      <ul>
       <li>
        <a href='#'>Why FLYR</a>
       </li>
       <li>
        <a href='#'>Resource Hub</a>
       </li>
       <li>
        <a href='#'>About Us</a>
       </li>
       <li>
        <a href=''>Request a Demo</a> <img src={arrowDots}></img>
       </li>
      </ul>
     </nav>
    </section>
   </main>
  </>
 );
}

export default App;

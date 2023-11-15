import { useState } from 'react';
import './App.css';

import Notifications from './components/Notifications';
import flyrLogo from './assets/images/logo-black-1.svg';
import arrowDownImage from './assets/images/arrow-dots-down.svg';
import arrowDots from './assets/images/arrow-dots.svg';

function App() {
 return (
  <>
   <main>
    <Notifications></Notifications>
    <section className='nav-section grid grid-cols-2 w-3/5 m-auto py-4 px-2'>
     <nav className='left-nav py-10 px-2'>
      <ul className='flex flex-row justify-evenly'>
       <li className='text-2xl'>
        <a href=''>
         <img src={flyrLogo}></img>
        </a>
       </li>
       <li className='font-bold leading-7 text-center'>
        <a className='text-2xl' href=''>
         Airlines
        </a>{' '}
        <img
         className='inline-block w-4 relative bottom-1'
         src={arrowDownImage}
        ></img>
       </li>
       <li className='font-bold'>
        <a className='text-2xl' href=''>
         Cargo
        </a>{' '}
        <img
         className='inline-block w-4 relative bottom-1'
         src={arrowDownImage}
        ></img>
       </li>
       <li className='font-bold'>
        <a className='text-2xl' href=''>
         Hospitality
        </a>{' '}
        <img
         className='inline-block w-4 relative bottom-1'
         src={arrowDownImage}
        ></img>
       </li>
      </ul>
     </nav>
     <nav className='right-nav py-10 px-2'>
      <ul className='flex flex-row justify-evenly'>
       <li>
        <a className='text-2xl' href='#'>
         Why FLYR
        </a>
       </li>
       <li>
        <a className='text-2xl' href='#'>
         Resource Hub
        </a>
       </li>
       <li>
        <a className='text-2xl' href='#'>
         About Us
        </a>
       </li>
       <li>
        <a className='text-2xl' href=''>
         Request a Demo
        </a>{' '}
        <img className='inline-block w-4 relative left-2 bottom-0.5' src={arrowDots}></img>
       </li>
      </ul>
     </nav>
    </section>
   </main>
  </>
 );
}

export default App;

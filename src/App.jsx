import { useState } from 'react';
import './App.css';

import smallWhiteIcon from './assets/images/small-icon.svg';

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
      <img className='ml-3' src={smallWhiteIcon}></img>
     </a>
    </section>
   </main>
  </>
 );
}

export default App;

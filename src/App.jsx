import { useState } from 'react';
import './App.css';

import smallWhiteIcon from './assets/images/small-icon.svg';

function App() {
 return (
  <>
   <main>
    <section className='notification flex'>
     <a href='https://flyr.com/resource-hub/flyr-labs-named-best-ai-based-solution-for-transportation/'>
      FLYR Named Best AI-Based Solution for Transportation
      <span>
       <img src={smallWhiteIcon}></img>
      </span>
     </a>
    </section>
   </main>
  </>
 );
}

export default App;

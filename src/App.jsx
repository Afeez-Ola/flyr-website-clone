import { useState } from 'react';
import './App.css';

import Notifications from './components/Notifications';
import NavBar from './components/NavBar';

function App() {
 return (
  <>
   <main>
    <Notifications></Notifications>
    <NavBar></NavBar>
   </main>
  </>
 );
}

export default App;

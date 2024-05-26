import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import './App.scss';
import Socket from './views/socket';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const getUpdates = (data) => {
     console.log('wwwwwwwww',data)
  } 


  return (
    <div>
      Hello
      {

        <Socket updateResponse={getUpdates}/>

      }
    </div>
  );
}

export default App;


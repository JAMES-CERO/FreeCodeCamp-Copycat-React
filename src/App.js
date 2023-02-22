import React from 'react';
import './App.css';
import Data from './components/Data';

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <h1>
          Here is what our alumni say about freeCodeCamp:
        </h1>
        <Data />
      </div>
    </div>
  );
}

export default App;

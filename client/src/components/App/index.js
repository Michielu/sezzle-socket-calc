import React from 'react';
import './App.css';

import { SezzleCalc } from '../index';


function App() {
  return (
    <div className="app-body row">
      {/* <header className="app-header">
        <p>Hello Sezzle</p>
      </header> */}
      <div className="app-content col-12 col-md-6">
        <SezzleCalc />
      </div>
    </div>
  );
}

export default App;

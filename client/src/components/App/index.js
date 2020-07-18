import React, { useState, useEffect } from 'react';

import './App.css';

import { SezzleCalc } from '../index';
import { getServerHistory } from '../../utils/history'

function App() {
  const [serverHistory, setServerHistory] = useState();

  useEffect(() => {
    async function getHistory() {
      const history = await getServerHistory();
      setServerHistory(history ? history.response : []);
    }
    getHistory();
  }, []);

  return (
    <div className="app-body row">
      <div className="app-content col-12 col-md-6">
        {serverHistory === undefined ? <div>Loading</div> : <SezzleCalc serverHistory={serverHistory} />}
      </div>
    </div>
  );
}

export default App;

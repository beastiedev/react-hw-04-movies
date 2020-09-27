import React, { Suspense } from 'react';
import { HashRouter } from 'react-router-dom';

import './App.css';
import NavHeader from './components/NavHeader/NavHeader';
import Content from './components/Content/Content';

function App() {
  return (
    <Suspense fallback={<p className="loading">Loading...</p>}>
      <HashRouter>
        <div className="App">
          <NavHeader />
          <Content />
        </div>
      </HashRouter>
    </Suspense>
  );
}

export default App;

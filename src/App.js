import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';

import './App.css';
import NavHeader from './components/NavHeader';
import Content from './components/Content';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavHeader />
        <Content />
      </div>
    </BrowserRouter>
  );
}

export default App;

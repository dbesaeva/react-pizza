import React from 'react';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Info from './components/Info';

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <Info />
      <Home />
    </div>
  );
}

export default App;

import React from 'react';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Info from './components/Info';

function App() {

  const [cartOpened, setCartOpened] = React.useState(false);

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)}/>}
      <Header onClickCart={() => setCartOpened(true)} />
      <Info />
      <Home />
    </div>
  );
}

export default App;

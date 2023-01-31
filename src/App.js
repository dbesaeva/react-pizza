import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Info from './components/Info';

function App() {

  const [cartOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
        try {
            const itemsResponse = await axios.get('https://shift-winter-2023-backend.onrender.com/api/pizza')
            setItems(itemsResponse.data);
        }
        catch(error) {
            alert('Ошибка при запросе данных');
        }
    }
    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  } 

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)}/>}
      <Header onClickCart={() => setCartOpened(true)} />
      <Info />
      <Home 
        items={items}
        onAddToCart={onAddToCart}
        cartItems={cartItems}
      />
    </div>
  );
}

export default App;

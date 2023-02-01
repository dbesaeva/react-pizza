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
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    async function fetchData() {
        try {
            const [cartResponse, itemsResponse] = await Promise.all([
              axios.get('https://63737c01348e9472990db5c5.mockapi.io/cart'),
              axios.get('https://shift-winter-2023-backend.onrender.com/api/pizza'),
            ]);
            setItems(itemsResponse.data);
            setCartItems(cartResponse.data);
        }
        catch(error) {
            alert('Ошибка при запросе данных');
        }
    }
    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    async function fetchData() {
      try {
        const prom = await axios.post('https://63737c01348e9472990db5c5.mockapi.io/cart', obj)
        setCartItems(prom => [...prom, obj]);
        console.log(prom)
      } catch (error) {
        alert('Ошибка при удалении из корзины');
      }
    }
    fetchData();
  } 

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://63737c01348e9472990db5c5.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
    } catch (error) {
      alert('Ошибка при удалении из корзины');
    }
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <Info />
      <Home 
        items={items}
        onAddToCart={onAddToCart}
        cartItems={cartItems}
        onChangeSearchInput={onChangeSearchInput}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </div>
  );
}

export default App;

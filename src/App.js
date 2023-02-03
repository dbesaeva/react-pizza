import React from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./pages/Drawer";
import Home from "./pages/Home";
import Info from "./components/Info/Info";
import Favorites from "./pages/Favorites";

export const AppContext = React.createContext({});

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [favorites, setFavorites] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, itemsResponse] = await Promise.all([
          axios.get("https://63737c01348e9472990db5c5.mockapi.io/cart"),
          axios.get("https://shift-winter-2023-backend.onrender.com/api/pizza"),
        ]);
        setItems(itemsResponse.data);
        setCartItems(cartResponse.data);
      } catch (error) {
        alert("Ошибка при запросе данных");
      }
    }
    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => +item.parentId === +obj.id);
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => +item.parentId !== +obj.id)
        );
        await axios.delete(
          `https://63737c01348e9472990db5c5.mockapi.io/cart/${findItem.id}`
        );
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post(
          "https://63737c01348e9472990db5c5.mockapi.io/cart",
          obj
        );
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
      }
    } catch (error) {
      alert("Ошибка при добавлении в корзину");
      console.error(error);
    }
  };

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://63737c01348e9472990db5c5.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => +item.id !== +id));
    } catch (error) {
      alert("Ошибка при удалении из корзины");
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => +favObj.id === +obj.id)) {
        axios.delete(
          `https://63737c01348e9472990db5c5.mockapi.io/favorites/${obj.id}`
        );
        setFavorites((prev) => prev.filter((item) => +item.id !== +obj.id));
      } else {
        const { data } = await axios.post(
          "https://63737c01348e9472990db5c5.mockapi.io/favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в избранное");
    }
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => +obj.parentId === +id);
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        isItemAdded,
        setCartOpened,
        setCartItems,
        onAddToCart,
        favorites,
        onAddToFavorite,
      }}
    >
      <div className="wrapper clear">
        {cartOpened && (
          <Drawer
            items={cartItems}
            onClose={() => setCartOpened(false)}
            onRemove={onRemoveItem}
          />
        )}
        <Header onClickCart={() => setCartOpened(true)} />
        <Info />
        <Routes>
            <Route
              path="/"
              element={
        <Home
          items={items}
          onAddToCart={onAddToCart}
          cartItems={cartItems}
          onChangeSearchInput={onChangeSearchInput}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          />}>
            </Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;

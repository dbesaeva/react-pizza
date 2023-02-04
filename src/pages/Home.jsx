import React from "react";
import Info from "../components/Info/Info";
import PizzaCard from "../components/PizzaCard/PizzaCard";

function Home({
  items,
  onAddToCart,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
}) {
  return (
    <div>
      <Info />
      <div className="catalog p-20">
        <div className="d-flex align-center justify-between mb-20">
          <h1 className="m-40">
            {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все пиццы"}
          </h1>
          <div className="search-block d-flex">
            <img src="img/search_block/search.svg" alt="Search" />
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                className="clear cu-p"
                src="img/pizza_card/remove.svg"
                alt="Clear"
              />
            )}
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск..."
            />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items
            .filter((item) => item.name.toLowerCase().includes(searchValue))
            .map((item, index) => (
              <PizzaCard
                key={index}
                id={item.id}
                name={item.name}
                price={item.price.default}
                imageUrl={item.img}
                onPlus={(obj) => onAddToCart(obj)}
                onFavorite={(obj) => onAddToFavorite(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

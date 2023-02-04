import React from "react";
import PizzaCard from "../components/PizzaCard/PizzaCard";
import { AppContext } from "../App";

function Favorites() {
  const { favorites, onAddToFavorite, onAddToCart } =
    React.useContext(AppContext);

  return (
    <div className="content p-20">
      <div className="d-flex align-center justify-between mb-40">
        <h1 className="m-20">Мои закладки</h1>
      </div>

      <div className="d-flex flex-wrap">
        {favorites.map((item, index) => (
          <PizzaCard
            key={index}
            {...item}
            favorited={true}
            onFavorite={onAddToFavorite}
            onPlus={(obj) => onAddToCart(obj)}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;

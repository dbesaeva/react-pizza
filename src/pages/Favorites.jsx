import React from "react";
import PizzaCard from "../components/PizzaCard/PizzaCard";
import { AppContext } from "../App";

function Favorites() {
  const { favorites, onAddToFavorite = { onAddToFavorite } } =
    React.useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>

      <div className="d-flex flex-wrap">
        {favorites.map((item) => (
          <PizzaCard
            key={item.name}
            id={item.id}
            name={item.name}
            price={item.price.default}
            imageUrl={item.img}
            favorited={true}
            onFavorite={onAddToFavorite}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;

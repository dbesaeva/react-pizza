import React from "react";
import styles from "./PizzaCard.module.scss";
import { AppContext } from "../../App";

function PizzaCard({
  name,
  id,
  imageUrl,
  price,
  onPlus,
  onFavorite,
  favorited = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);
  const [isFaforite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, parentId: id, name, imageUrl, price });
  };

  const onClickFavorite = () => {
    onFavorite({ id, parentId: id, name, imageUrl, price });
    setIsFavorite(!isFaforite);
  };

  return (
    <div className={styles.card}>
      {onFavorite && (
        <div className={styles.favorite} onClick={onClickFavorite}>
          <img
            width={22}
            height={22}
            src={
              isFaforite
                ? "img/pizza_card/liked.svg"
                : "img/pizza_card/favorite.svg"
            }
            alt="Unliked"
          />
        </div>
      )}
      <img
        className={styles.image}
        width={120}
        height={120}
        src={imageUrl}
        alt="Pizzas"
      />
      <h4>{name}</h4>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        {onPlus && (
          <img
            width={25}
            height={25}
            className={styles.plus}
            onClick={onClickPlus}
            src={
              isItemAdded(id)
                ? "img/pizza_card/cheked.svg"
                : "img/pizza_card/btn-plus.svg"
            }
            alt="Plus"
          />
        )}
      </div>
    </div>
  );
}

export default PizzaCard;

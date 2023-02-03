import React from "react";
import styles from "./PizzaCard.module.scss";
import { AppContext } from "../../App";

function PizzaCard({ name, id, imageUrl, price, onPlus }) {
  const { isItemAdded } = React.useContext(AppContext);

  const onClickPlus = () => {
    onPlus({ id, parentId: id, name, imageUrl, price });
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="img/pizza_card/favorite.svg" alt="Unliked" />
      </div>
      <img
        className={styles.image}
        width={150}
        height={150}
        src={imageUrl}
        alt="Pizzas"
      />
      <h5>{name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        {onPlus && (
          <img
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

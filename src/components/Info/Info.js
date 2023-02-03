import React from "react";
import styles from "./Info.module.scss";

const Info = () => {
  return (
    <div className={styles.mainPage}>
      <h1 className="pr-10">Bestseller</h1>
      <p>
        Margherita pizza is known for its ingredients representing the colours
        of the Italian flag. These ingredients include red tomato sauce, white
        mozzarella and fresh green basil. When all of these delicious flavours
        are combined on a hand-kneaded pizza base, a universally-adored pizza is
        created
      </p>
      <img src="img/information/pizza.png" alt="Pizza" />
      <img
        className={styles.imgLeft}
        src="img/information/pizza.png"
        alt="PizzaLeft"
      />
      <img
        className={styles.imgRight}
        src="img/information/pizza.png"
        alt="PizzaRight"
      />
      <img
        className={styles.orderNow}
        src="img/information/order-now-button.png"
        alt="Order"
      />
      <img
        className={styles.addToCart}
        src="img/information/add-to-cart.png"
        alt="AddCart"
      />
    </div>
  );
};

export default Info;

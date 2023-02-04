import React from "react";
import styles from "./Header.module.scss";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

function Header(props) {
  const { cartItems } = React.useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className={styles.name}>
          <div>
            <h3>PizzaBro</h3>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img
            width={21}
            height={21}
            src="img/header/shopping-bag.svg"
            alt="Cart"
          />
          <span>{totalPrice} руб.</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favorites">
            <img
              className="mr-30 cu-p"
              width={23}
              height={23}
              src="img/header/favorites.svg"
              alt="Favorites"
            />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;

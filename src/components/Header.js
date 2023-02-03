import React from "react";
import { AppContext } from "../App";

function Header(props) {
  const {cartItems} =React.useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="name d-flex align-center">
        <div>
          <h3>PizzaBro</h3>
        </div>
      </div>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img
            width={23}
            height={23}
            src="img/header/shopping-bag.svg"
            alt="Cart"
          />
          <span>{totalPrice} руб.</span>
        </li>
        <li className="mr-20 cu-p">
          <img
            className="mr-30 cu-p"
            width={23}
            height={23}
            src="img/header/favorites.svg"
            alt="Favorites"
          />
        </li>
      </ul>
    </header>
  );
}

export default Header;

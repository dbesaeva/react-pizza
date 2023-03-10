import React from "react";
import Modal from "../../components/Modal/Modal";
import "./Drawer.module.scss";

function Drawer({ onClose, onRemove, items = [] }) {
  const [isModal, setModal] = React.useState(false);

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img
            onClick={onClose}
            className="cu-p"
            src="img/cart/btn-remove.svg"
            alt="Close"
          />
        </h2>
        <div className="d-flex flex-column flex">
          <div className="items flex">
            {items.map((obj) => (
              <div
                key={items.key}
                className="cartItem d-flex align-center mb-20"
              >
                <div
                  style={{ backgroundImage: `url(${obj.imageUrl})` }}
                  className="cartItemImg"
                ></div>
                <div className="mr-20 flex">
                  <p className="mb-5">{obj.name}</p>
                  <b>{obj.price} rub.</b>
                </div>
                <img
                  width={53}
                  height={23}
                  className="removeBtn"
                  src="img/cart/btn-remove.svg"
                  alt="Remove"
                  onClick={() => onRemove(obj.id)}
                />
              </div>
            ))}
          </div>

          <div className="cartTotalBlock">
            <>
              <button onClick={() => setModal(true)} className="greenButton">
                Оформить <img src="img/cart/arrow.svg" alt="Arrow" />
              </button>
              <Modal
                isVisible={isModal}
                title="Заполните указанную форму"
                content={<p>Add your content here</p>}
                onClose={() => setModal(false)}
              />
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;

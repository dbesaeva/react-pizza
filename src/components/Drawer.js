import React from "react";
import Modal from "./Modal/Modal";

function Drawer({onClose, onRemove, items = []}) {

    // const [isOpenedForm, setIsOpenedForm] = React.useState(false);
    const [isModal, setModal] = React.useState(false);

    // const openForm = () => {
    //     setIsOpenedForm(!isOpenedForm);
    // }

     return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">Корзина
                    <img onClick={onClose} className="cu-p" src="img/btn-remove.svg" alt="Close"/>
                </h2>
                <div className="d-flex flex-column flex">
                    <div className="items flex"> 
                        {items.map((obj) => 
                        <div className="cartItem d-flex align-center mb-20">
                            <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cartItemImg"></div>
                            <div className="mr-20 flex">
                                <p className="mb-5">{obj.name}</p>
                                <b>{obj.price} rub.</b>
                            </div>
                            <img 
                                width={53} height={23}
                                className="removeBtn" 
                                src="img/btn-remove.svg" 
                                alt="Remove"
                                onClick={() => onRemove(obj.id)}                          
                            />
                        </div> 
                        )}                
                    </div> 

                    <div className="cartTotalBlock">
                        <ul>
                            <li>
                                <span>Итого:</span>
                                <div></div>
                                <b>1200 руб.</b>
                            </li>
                            <li>
                                <span>Налог 4%:</span>
                                <div></div>
                                <b>1100 руб.</b>
                            </li>
                        </ul>
                        <>
                        <button onClick={() => setModal(true)} className="greenButton">Оформить <img src="img/arrow.svg" alt="Arrow"/></button>
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
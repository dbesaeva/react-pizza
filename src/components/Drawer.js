import React from "react";

function Drawer() {
     return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">Cart
                    <img className="cu-p" src="img/btn-remove.svg" alt="Close"/>
                </h2>
                <div className="d-flex flex-column flex">
                    <div className="items flex"> 
                        <div className="cartItem d-flex align-center mb-20">
                            <div className="mr-20 flex">
                                <p className="mb-5">ggg</p>
                                <b>1000 rub.</b>
                            </div>
                            <img 
                                width={53} height={23}
                                className="removeBtn" 
                                src="img/btn-remove.svg" 
                                alt="Remove"
                            />
                        </div>                 
                    </div> 

                    <div className="cartTotalBlock">
                        <ul>
                            <li>
                                <span>Total:</span>
                                <div></div>
                                <b>1200 rub.</b>
                            </li>
                            <li>
                                <span>Tax 4%:</span>
                                <div></div>
                                <b>1100 rub.</b>
                            </li>
                        </ul>
                        <button className="greenButton">Сheckout <img src="img/arrow.svg" alt="Arrow"/></button>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default Drawer;
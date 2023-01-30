import React from 'react';
import styles from './Card.module.scss';

function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src="img/favorite.svg" alt="Unliked"/>
            </div>
            <img className={styles.image} width={159} height={208} src="img/pizzas/pizza.svg" alt="Pizzas"/>
            <h5>Marghretia</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Price:</span>
                    <b>1200 rub.</b>
                </div>
            <img 
                className={styles.plus} 
                src="img/btn-plus.svg"
                alt="Plus"
            />
            </div>
        </div>  
    );
}

export default Card;


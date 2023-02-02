import React from 'react';
import styles from './PizzaCard.module.scss';

function PizzaCard({name, id, imageUrl, price, onPlus}) {

    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        onPlus({id, name, imageUrl, price});
        setIsAdded(!isAdded);
    };

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src="img/pizza_card/favorite.svg" alt="Unliked"/>
            </div>
            <img className={styles.image} width={150} height={150} src={imageUrl} alt="Pizzas"/>
            <h5>{name}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
            <img 
                className={styles.plus} 
                src={isAdded ? "img/pizza_card/cheked.svg" : "img/pizza_card/btn-plus.svg"}
                alt="Plus"
                onClick={onClickPlus}
            />
            </div>
        </div>  
    );
}

export default PizzaCard;

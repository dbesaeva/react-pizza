import React from 'react';
import styles from './Card.module.scss';

function Card({name, imageUrl, price, onPlus}) {

    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        onPlus({name, imageUrl, price});
        setIsAdded(!isAdded);
    };

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src="img/favorite.svg" alt="Unliked"/>
            </div>
            <img className={styles.image} width={150} height={150} src={imageUrl} alt="Pizzas"/>
            <h5>{name}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Price:</span>
                    <b>{price}</b>
                </div>
            <img 
                className={styles.plus} 
                src={isAdded ? "img/cheked.svg" : "img/btn-plus.svg"}
                alt="Plus"
                onClick={onClickPlus}
            />
            </div>
        </div>  
    );
}

export default Card;


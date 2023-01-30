function App() {
  return (
    <div className="wrapper clear">

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

      <header className="d-flex justify-between align-center p-40">
        <div className="name d-flex align-center">
            <div>
                <h3>PizzaBro</h3>
            </div>  
        </div>
        <ul className="d-flex">
          <li className="mr-30 cu-p">
              <img width={23} height={23} src="img/shopping-bag.svg" alt="Cart" />
              <span>1300 rub.</span>
          </li>
          <li className='mr-20 cu-p'>
                <img className="mr-30 cu-p" width={23} height={23} src="img/favorite.svg" alt="Favorites" />
          </li>
              <img width={19} height={19} src="img/user.svg" alt="User" />
        </ul>
      </header>

      <div className="main-page">
        <h1 className="pr-10">Bestseller</h1>
        <p>
          Margherita pizza is known for its ingredients representing the colours 
          of the Italian flag. These ingredients include red tomato sauce, white mozzarella and fresh green 
          basil. When all of these delicious flavours are combined on a hand-kneaded pizza base, a 
          universally-adored pizza is created
        </p>
        <img src="img/pizza.png" alt="Pizza" />
        <img className="img-left" src="img/pizza.png" alt="PizzaLeft" />
        <img className="img-right" src="img/pizza.png" alt="PizzaRight" />
        <img className="order-now" src="img/order-now-button.png" alt="Order" />
        <img className="add-to-cart" src="img/add-to-cart.png" alt="AddCart" />
      </div>

      <div className="catalog p-20">
      <div className="d-flex align-center justify-between mb-20">
      <h1 className="m-40">All Pizzas</h1>
                <div className="search-block d-flex">
                    <img src="img/search.svg" alt="Search"/>
                        <img
                          className="clear cu-p"
                          src="img/remove.svg"
                          alt="Clear"
                        />
                    <input placeholder="Поиск..."/>
                </div>
            </div>
        
        <div className="card m-40">
            <div className="favorite">
              <img src="img/favorite.svg" alt="Unliked"/>
            </div>
            <img className="image" width={159} height={208} src="img/pizzas/pizza.svg" alt="Bags"/>
            <h5>Marghretia</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                <span>Price:</span>
                <b>1200 rub.</b>
                </div>
                  <img 
                    className="plus"
                    src="img/btn-plus.svg"
                    alt="Plus"
                  />
            </div>
        </div>  
      </div>
    </div>
  );
}

export default App;

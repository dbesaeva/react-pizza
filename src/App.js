
function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="name d-flex align-center">
            <div>
                <h3>PizzaBro</h3>
            </div>  
        </div>
        <ul className="d-flex">
          <li className="mr-30 cu-p">
              <img width={23} height={23} src="img/shopping-bag.svg" alt="Cart" />
              <span>1300 руб.</span>
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
    </div>
  );
}

export default App;

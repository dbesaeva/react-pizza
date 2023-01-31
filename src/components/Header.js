import React from 'react';

function Header(props) {
    return (
        <header className="d-flex justify-between align-center p-40">
        <div className="name d-flex align-center">
            <div>
                <h3>PizzaBro</h3>
            </div>  
        </div>
        <ul className="d-flex">
          <li onClick={props.onClickCart} className="mr-30 cu-p">
              <img width={23} height={23} src="img/shopping-bag.svg" alt="Cart" />
              <span>1300 rub.</span>
          </li>
          <li className='mr-20 cu-p'>
                <img className="mr-30 cu-p" width={23} height={23} src="img/favorite.svg" alt="Favorites" />
          </li>
              <img width={19} height={19} src="img/user.svg" alt="User" />
        </ul>
      </header>
    );
}

export default Header;
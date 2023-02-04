import React from "react";
import "./Form.scss";
import axios from "axios";
import { AppContext } from "../../App";

function Form() {
  const { cartItems, setCartItems } = React.useContext(AppContext);

  const onClickOrder = async () => {
    try {
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          `https://63737c01348e9472990db5c5.mockapi.io/cart/${item.id}`
        ); // бесплатный план мокапи вынуждает костылить
      }
    } catch (error) {
      alert("Не удалось создать заказ :(");
      console.error(error);
    }
  };

  const orderData = {
    name: "",
    surname: "",
    fathersname: "",
    registrationAddress: "",
    city: "",
    street: "",
    house: "",
    apartment: "",
    birthDate: "",
    comment: "",
    size: "small",
    crust: "cheesy",
    price: 0,
  };

  const [data, setData] = React.useState(orderData);

  function handleChange(event) {
    setData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (data) {
      axios
        .post(
          "https://shift-winter-2023-backend.onrender.com/api/pizza/createOrder",
          {
            pizzas: [],
            details: {
              user: {
                firstname: data.name,
                lastname: data.surname,
                birthDate: data.birthDate,
                registrationAddress: data.registrationAddress,
              },
              address: {
                city: data.city,
                street: data.street,
                house: data.house,
                apartment: data.apartment,
                comment: data.comment,
              },
            },
          }
        )
        .then(function (response) {
          alert("Заказ отправлен", response);
          onClickOrder();
        })
        .catch(function (error) {
          alert("Что-то пошло не так, повторите попытку позже");
          console.log(error);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit} id="forma">
      <div className="justify-between mb-20">
        <h3>Персональные данные</h3>
        <label>
          {" "}
          Имя:
          <input
            required
            placeholder="Имя"
            minLength="2"
            maxLength="30"
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </label>
        <label>
          {" "}
          Фамилия:
          <input
            required
            placeholder="Фамилия"
            minLength="2"
            maxLength="30"
            type="text"
            name="surname"
            value={data.surname}
            onChange={handleChange}
          />
        </label>
        <label>
          {" "}
          Отчество:
          <input
            placeholder="Отчество"
            minLength="2"
            maxLength="30"
            type="text"
            name="fathersname"
            value={data.fathersname}
            onChange={handleChange}
          />
        </label>
        <div className="p-10">
          <label className="checkbox style-a">
            <input type="checkbox" name="checkbox" />
            <div className="checkbox__checkmark"></div>
            <div className="checkbox__body">Нет отчества</div>
          </label>
        </div>
        <label>
          Дата рождения:
          <input
            type="date"
            name="birthDate"
            value={data.birthDate}
            min="1900-01-01"
            max="2005-12-31"
            onChange={handleChange}
          />
        </label>
        <label>
          Адрес проживания:
          <input
            minLength="2"
            maxLength="30"
            type="text"
            name="registrationAddress"
            value={data.registrationAddress}
            onChange={handleChange}
          />
        </label>
        <h3>Адрес доставки</h3>
        <label>
          Город:
          <input
            required
            placeholder="Город"
            minLength="2"
            maxLength="50"
            type="text"
            name="city"
            value={data.city}
            onChange={handleChange}
          />
        </label>
        <label>
          Улица:
          <input
            required
            placeholder="Улица"
            minLength="2"
            maxLength="60"
            type="text"
            name="street"
            value={data.street}
            onChange={handleChange}
          />
        </label>
        <label>
          Дом:
          <input
            required
            placeholder="Дом"
            minLength="1"
            maxLength="10"
            type="number"
            name="house"
            value={data.house}
            onChange={handleChange}
          />
        </label>
        <label>
          Квартира:
          <input
            required
            placeholder="Квартира"
            minLength="1"
            maxLength="10"
            type="number"
            name="apartment"
            value={data.apartment}
            onChange={handleChange}
          />
        </label>
        <label>
          Заметка для курьера:
          <textarea
            name="comment"
            value={data.comment}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Отправить заявку</button>
      </div>
    </form>
  );
}

export default Form;

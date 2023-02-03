import React from "react";
import "./Form.scss";

//только начала делать форму
function Form() {
  const [inputs, setInputs] = React.useState({});
  const [textarea, setTextarea] = React.useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setTextarea(event.target.value);
    setInputs((values) => ({ ...values, [name]: value, [textarea]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
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
            name="username"
            value={inputs.username || ""}
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
            name="surnname"
            value={inputs.surnname || ""}
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
            value={inputs.fathersname || ""}
            onChange={handleChange}
          />
        </label>
        <div className="p-10">
          <label className="checkbox style-a">
            <input type="checkbox" />
            <div className="checkbox__checkmark"></div>
            <div className="checkbox__body">Нет отчества</div>
          </label>
        </div>
        <label>
          Дата рождения:
          <input
            type="date"
            id="start"
            name="trip-start"
            value="2023-02-05"
            min="1900-01-01"
            max="2005-12-31"
          />
        </label>
        <label>
          Адрес проживания:
          <input
            minLength="2"
            maxLength="30"
            type="text"
            name="address"
            value={inputs.address || ""}
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
            value={inputs.city || ""}
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
            value={inputs.street || ""}
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
            value={inputs.house || ""}
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
            value={inputs.apartment || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Заметка для курьера:
          <textarea
            name="text"
            value={inputs.text || ""}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Отправить заявку</button>
      </div>
    </form>
  );
}

export default Form;

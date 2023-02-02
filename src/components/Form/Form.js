import React from 'react';
import styles from './Form.css';

//только начала делать форму
function Form() {  
    const [inputs, setInputs] = React.useState({});
    const [textarea, setTextarea] = React.useState('');

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setTextarea(event.target.value)
      setInputs(values => ({...values, [name]: value, [textarea]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(inputs);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <div className='justify-between mb-20'>
            <h3>Персональные данные</h3>
            <label> Имя:
                <input 
                    required placeholder="Имя"
                    minlength="2"
                    maxlength="30"
                    type="text" 
                    name="username" 
                    value={inputs.username || ""} 
                    onChange={handleChange}
                />
            </label>
            <label> Фамилия:
                <input 
                    required placeholder="Фамилия"
                    minlength="2"
                    maxlength="30"
                    type="text" 
                    name="surnname" 
                    value={inputs.surnname || ""} 
                    onChange={handleChange}
                />
            </label>
            <label> Отчество:
                <input 
                    placeholder="Отчество"
                    minlength="2"
                    maxlength="30"
                    type="text" 
                    name="fathersname" 
                    value={inputs.fathersname || ""} 
                    onChange={handleChange}
                />
            </label>
            <label>Нет отчества
                <input type="checkbox" id="accept" name="accept" value="yes" />  
            </label>
            <label>Дата рождения:
            <input 
            
                type="date" 
                id="start" 
                name="trip-start"
                value="2023-02-05"
                min="1900-01-01" 
                max="2005-12-31" 
            />
            </label>
            <label>Адрес проживания:
                <input 
                    minlength="2"
                    maxlength="30"
                    type="text" 
                    name="address" 
                    value={inputs.address || ""} 
                    onChange={handleChange}
                />
            </label>
            <h3></h3>
            <h3>Адрес доставки</h3>
            <label>Город:
                <input 
                    minlength="2"
                    maxlength="50"
                    type="text" 
                    name="city" 
                    value={inputs.city || ""} 
                    onChange={handleChange}
                />
            </label>
            <label>Улица:
                <input 
                    minlength="2"
                    maxlength="60"
                    type="text" 
                    name="street" 
                    value={inputs.street || ""} 
                    onChange={handleChange}
                />
            </label>
            <label>Дом:
                <input 
                    minlength="1"
                    maxlength="10"
                    type="number"
                    name="house" 
                    value={inputs.house || ""} 
                    onChange={handleChange}
                />
            </label>
            <label>Квартира:
                <input 
                    minlength="1"
                    maxlength="10"
                    type="number"
                    name="apartment" 
                    value={inputs.apartment || ""} 
                    onChange={handleChange}
                />
            </label>
            <label>Заметка для курьера:
                <textarea name="text" value={inputs.text || ""} onChange={handleChange} />
            </label>
            <button type="submit">Отправить заявку</button>
        </div>
        
      </form>
    );
    };

  export default Form;
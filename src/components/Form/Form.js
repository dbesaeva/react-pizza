import React from 'react';

//только начала делать форму
function Form() {  
    const [inputs, setInputs] = React.useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(inputs);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
            <h3>Персональные данные</h3>
            <label>Имя:
                <input 
                type="text" 
                name="username" 
                value={inputs.username || ""} 
                onChange={handleChange}
                />
            </label>
            <label>Фамилия:
                <input 
                type="text" 
                name="surnname" 
                value={inputs.surnname || ""} 
                onChange={handleChange}
                />
            </label>
            <label>Отчество:
                <input 
                type="text" 
                name="fathersname" 
                value={inputs.fathersname || ""} 
                onChange={handleChange}
                />
            </label>
            <label>Возраст:
            <input 
                type="number" 
                name="age" 
                value={inputs.age || ""} 
                onChange={handleChange}
            />
            </label>
            <input type="submit" />
        </div>
        
      </form>
    );
    };

  export default Form;
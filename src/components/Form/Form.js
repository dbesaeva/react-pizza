import React from "react";

//только начала делать форму
function Form() {  
    const [name, setName] = useState('');  
  
    return (  
        <div>  
        <form>  
            <label>Имя:</label>  
            <input type="text" onChange={(e) => setName(e.target.value)} />  
        </form>  
        <br />  
        Имя: {name}  
        </div>  
    );  
    } 

  export default Form;
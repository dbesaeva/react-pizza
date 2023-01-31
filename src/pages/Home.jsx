import React from "react";
import Card from "../components/Card";
import axios from 'axios';

function Home() {

    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        async function fetchData() {
            try {
                const itemsResponse = await axios.get('https://shift-winter-2023-backend.onrender.com/api/pizza')
                setItems(itemsResponse.data);
            }
            catch(error) {
                alert('Ошибка при запросе данных');
            }
        }
        fetchData();
    }, []);

    return (
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
            <div className="d-flex">
                {items.map((obj) => (
                    <Card 
                        name={obj.name}
                        price={obj.price.default}
                        imageUrl={obj.img}
                        onClick={() => console.log(obj)}
                    />
                    
                ))}
            </div>
        </div>
    )
}

export default Home;






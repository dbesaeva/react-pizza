import React from "react";
import Card from "../components/Card";

function Home() {
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
            <Card />
        </div>
    )
}

export default Home;







import axios from "axios";
import React, { useState, useEffect } from "react";
import PriceList from "./PriceList";

export default function App() {
    const [priceData, setPriceData] = useState([]);
    const [counter, setCounter] = useState(0)

    const fetchData = async () => {
        const fetchdata = await axios.get("https://fakestoreapi.com/products");
        // console.log(fetchdata.data);
        const priceArr = fetchdata.data.map(({ price }) => {
            return price;
        });
        setPriceData(priceArr);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const sortAscending = () => {

        priceData.sort(function (a, b) {
            return a - b;
        });
        console.log(priceData);
        // setCounter(counter + 1)
        setPriceData([...priceData]);
    };

    const sortDescending = () => {
        priceData.sort(function (a, b) {
            return b - a;
        });
        setPriceData([...priceData]);
    };

    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
            <p>{counter}</p>
            <button onClick={sortAscending}>Ascending</button>
            <button onClick={sortDescending}>Descending</button>
            <PriceList priceList={priceData} />
        </div>
    );
}



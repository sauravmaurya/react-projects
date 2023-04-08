import React from "react";
export default function PriceList({ priceList }) {
    const list = priceList.map((item, id) => {
        return <li key={id}>{item}</li>;
    });
    return (
        <>
            <ul>{list}</ul>
        </>
    );
}

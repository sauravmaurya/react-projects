import React from 'react'
import { useState, useMemo } from "react";

function Contact() {
    const [counter, setCounter] = useState(0);
    const [multiplier, setMultiplier] = useState(10);

    const isEven = useMemo(() => {
        console.log("......");
        return counter % 2 === 0;
    }, [counter]);

    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>{counter}</h2>
            <h2>{multiplier}</h2>
            <h2>{isEven ? "even" : "odd"}</h2>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
            <button onClick={() => setMultiplier(multiplier * 10)}>
                Multiply by 10
            </button>
        </div>
    );
}

export default Contact

import React from "react";
import { useState, useEffect } from "react";
import "./style.css";

const UseEffect = () => {
    // const initialData = 15;
    const [myNum, setMyNum] = useState(0)
    useEffect(() => {
        document.title = `Chat(${myNum})`
        console.log("useeffect")
    }, [myNum])


    return (
        <>
            <div className="center_div">
                <p>{myNum}</p>
                <div className="button2" onClick={() => {
                    setMyNum(myNum + 1)
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
            </div>
        </>
    );
};

export default UseEffect;
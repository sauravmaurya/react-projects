import React, { useReducer } from "react";
import "./style.css";

const Actions = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}

const reducer = (state, { type, payload }) => {
    // eslint-disable-next-line default-case
    switch (type) {
        case Actions.INCREMENT:
            return state + 1
        case Actions.DECREMENT:
            if (state > 0)
                return state - 1
            else
                return 0
    }
}

const UseReducer = () => {
    // const initialData = 15;
    //   const [myNum, setMyNum] = React.useState(0);
    const intialData = 10;
    const [state, dispatch] = useReducer(reducer, intialData)


    return (
        <>
            <div className="center_div">
                <p>{state}</p>
                <div className="button2" onClick={() => { dispatch({ type: Actions.INCREMENT }) }}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
                <div className="button2" onClick={() => { dispatch({ type: Actions.DECREMENT }) }}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECR
                </div>
            </div>
        </>
    );
};

export default UseReducer;
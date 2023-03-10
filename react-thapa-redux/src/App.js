import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incCounter, decCounter } from './actions/index'


function App() {
    const myState = useSelector((state) => {
        return state.changeTheNumber
    })

    const dispatch = useDispatch()

    return (
        <>
            <div>
                <h1>Increment/Decrement Counter</h1>
                <h4>using react and redux</h4>
                <div>
                    <button onClick={() => dispatch(decCounter())}>-</button>
                    <input value={myState}></input>
                    <button onClick={() => dispatch(incCounter(5))}>+</button>
                </div>
            </div>
        </>
    )
}

export default App

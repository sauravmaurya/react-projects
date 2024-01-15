import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incCounter, decCounter, fetchUsers } from './actions/index'


function App() {
    const { counter, users } = useSelector((state) => {
        return state.changeTheNumber
    })

    const dispatch = useDispatch()
    const userList = users.map((user) => {
        return <div>
            <div>Name:{user.name}</div>
            <div>Phone:{user.phone}</div>
            <div>Website:{user.website}</div>
        </div>
    })

    return (
        <>
            <div>
                <h1>Increment/Decrement Counter</h1>
                <h4>using react and redux</h4>
                <h5>Number of user:{users.length}</h5>
                <div>
                    <button onClick={() => dispatch(decCounter())}>-</button>
                    <input value={counter}></input>
                    <button onClick={() => dispatch(incCounter(5))}>+</button>
                    <button onClick={() => { dispatch(fetchUsers()) }}>Fetch Data</button>
                </div>
                <div>{userList}</div>

            </div>
        </>
    )
}

export default App

import React from 'react'
import { ACTIONS } from './App'

function OperationButton({ operation, dispatch }) {
    var saurav;
    return (
        <>
            <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERTAION, payload: operation })}>{operation}</button>
        </>
    )
}

export default OperationButton

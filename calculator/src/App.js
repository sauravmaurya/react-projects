import React, { useReducer } from 'react'
import './styles.css';
import DigitButton from './DigitButton';
import OperationButton from './OperationButton';

export const ACTIONS = {
    ADD_DIGIT: 'add-digit',
    CHOOSE_OPERTAION: 'choose-operation',
    EVALUATE: 'evaluate',
    DELETE_DIGIT: 'delete-digit',
    CLEAR: 'clear'
}

function reducer(state, { type, payload }) {
    // eslint-disable-next-line default-case
    switch (type) {
        case ACTIONS.ADD_DIGIT:
            if (state.overwrite) {
                console.log("inside if")
                return {
                    ...state,
                    currentOperand: payload,
                    overwrite: false,
                }
            }
            if (payload === "0" && state.currentOperand === "0") {
                return state
            }
            if (payload === "." && state.currentOperand.includes(".")) {
                return state
            }
            return {
                ...state,
                currentOperand: `${state.currentOperand || ""}${payload}`
            }

        case ACTIONS.CHOOSE_OPERTAION:
            if (state.previousOperand == null && state.currentOperand == null) {
                return state
            }
            if (state.previousOperand == null) {
                return {
                    ...state,
                    operation: payload,
                    previousOperand: state.currentOperand,
                    currentOperand: null
                }
            }
            if (state.currentOperand == null) {
                return {
                    ...state,
                    operation: payload.operation
                }
            }

            return {
                ...state,
                previousOperand: evaluate(state),
                operation: payload,
                currentOperand: null,
            }

        case ACTIONS.CLEAR:
            return {} //return empty state

        case ACTIONS.EVALUATE:
            if (state.previousOperand == null || state.currentOperand == null || state.operation == null) {
                return state
            }
            return {
                previousOperand: null,
                operation: null,
                currentOperand: evaluate(state),
                overwrite: true
            }
        case ACTIONS.DELETE_DIGIT:
            if (state.currentOperand == null) return state
            return {
                ...state,
                currentOperand: state.currentOperand.slice(0, -1)
            }
    }
}

function evaluate({ currentOperand, previousOperand, operation }) {
    const prev = parseFloat(previousOperand)
    const current = parseFloat(currentOperand)
    let computation = "";
    if (isNaN(prev) || isNaN(current)) return "";
    // eslint-disable-next-line default-case
    switch (operation) {
        case "/":
            computation = prev / current
            break;
        case "*":
            computation = prev * current
            break;
        case "+":
            computation = prev + current
            break;
        case "-":
            computation = prev - current
            break;
    }

    return computation.toString()
}


function App() {

    const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, {})

    return (
        <>
            <div className='calculator-grid'>
                <div className='output'>
                    <div className="previous-operand">{previousOperand}{operation}</div>
                    <div className="current-operand">{currentOperand}</div>
                </div>
                <button className="span-two" onClick={() => dispatch({ type: ACTIONS.CLEAR })}>AC</button>
                <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>DEL</button>
                <OperationButton operation="/" dispatch={dispatch}></OperationButton>
                <DigitButton digit="1" dispatch={dispatch}></DigitButton>
                <DigitButton digit="2" dispatch={dispatch}></DigitButton>
                <DigitButton digit="3" dispatch={dispatch}></DigitButton>
                <OperationButton operation="*" dispatch={dispatch}></OperationButton>
                <DigitButton digit="4" dispatch={dispatch}></DigitButton>
                <DigitButton digit="5" dispatch={dispatch}></DigitButton>
                <DigitButton digit="6" dispatch={dispatch}></DigitButton>
                <OperationButton operation="+" dispatch={dispatch}></OperationButton>
                <DigitButton digit="7" dispatch={dispatch}></DigitButton>
                <DigitButton digit="8" dispatch={dispatch}></DigitButton>
                <DigitButton digit="9" dispatch={dispatch}></DigitButton>
                <OperationButton operation="-" dispatch={dispatch}></OperationButton>
                <DigitButton digit="." dispatch={dispatch}></DigitButton>
                <DigitButton digit="0" dispatch={dispatch}></DigitButton>
                <button className='span-two' onClick={() => dispatch({ type: ACTIONS.EVALUATE })}>=</button>
            </div>
        </>
    )
}

export default App

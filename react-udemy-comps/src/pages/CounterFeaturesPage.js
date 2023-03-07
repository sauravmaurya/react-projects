import { useReducer } from 'react'
import Button from '../components/Button';
import Panel from '../components/Panel';
import produce from 'immer';

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement"
const SET_VALUE_TO_ADD = "set_value_to_add";
const ADD_VALUE_TO_COUNT ="add_value_to_count";

const reducer = (state, action) => {

    switch (action.type) {
        case INCREMENT_COUNT:
            state.count=state.count +1
            return
        case DECREMENT_COUNT:
            state.count=state.count -1
            return 
        case SET_VALUE_TO_ADD:
            state.valueToAdd = action.payload
            return 
        case ADD_VALUE_TO_COUNT:
            state.count=state.count+state.valueToAdd
            state.valueToAdd = 0
            return
        default:
            return;
    }


    //switch without immer
    // switch (action.type) {
    //     case INCREMENT_COUNT:
    //         return {
    //             ...state,
    //             count: state.count + 1
    //         };
    //     case DECREMENT_COUNT:
    //         return {
    //             ...state,
    //             count: state.count - 1
    //         }
    //     case SET_VALUE_TO_ADD:
    //         return {
    //             ...state,
    //             valueToAdd: action.payload
    //         }
    //     case ADD_VALUE_TO_COUNT:
    //         return{
    //             ...state,
    //             count:state.count+state.valueToAdd,
    //             valueToAdd:0
    //         }
    //     default:
    //         return state
    // }


    // use of if to update state
    // if(action.type===INCREMENT_COUNT){
    //     return {
    //         ...state,
    //         count:state.count+1
    //     }
    // }

    // if(action.type===DECREMENT_COUNT){
    //     return {
    //         ...state,
    //         count:state.count-1
    //     }
    // }

    // if(action.type===SET_VALUE_TO_ADD){
    //     return{
    //         ...state,
    //         valueToAdd:action.payload
    //     }
    // }

    // return state
}


function CounterFeaturesPage({ initialCounter }) {

    // const [count,setCount] = useState(initialCounter)
    // const [valueToAdd,setValueToAdd] = useState(0)

    const [state, dispatch] = useReducer(produce(reducer), {
        count: initialCounter,
        valueToAdd: 0
    })

    const increment = () => {
        dispatch({
            type: INCREMENT_COUNT
        })

        // setCount(count+1)
    }

    const decrement = () => {
        dispatch({
            type: DECREMENT_COUNT,
        })

        // setCount(count-1)
    }

    const handleChange = (event) => {
        const value = parseInt(event.target.value)

        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value
        })

        // setValueToAdd(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type:ADD_VALUE_TO_COUNT
        })
        // setCount(count+valueToAdd)
        // setValueToAdd(0)
    }

    return (<Panel>
        <div>{state.count}</div>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>

        <form onSubmit={handleSubmit}>
            <label>Add a lot</label>
            <input value={state.valueToAdd || ""} onChange={handleChange} type="number" className="p-1 m-3 bg-gray-50 border border-gray-300" />
            <Button>Add It</Button>
        </form>
    </Panel>)
}

export default CounterFeaturesPage;
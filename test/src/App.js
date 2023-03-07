import {useState} from 'react';
import Button from './component/Button';

function App(){

    const [counter,setCounter] = useState(0)

    const handleIncrement=()=>{
        setCounter(counter+1)
       
    }

    const handleDecrement=()=>{
        setCounter(counter-1)
    }

    return(
        <div>
             <label>{counter}</label>
            <Button onClick={handleIncrement} color="red">Increment</Button>
            <Button onClick={handleDecrement} color="blue">Decrement</Button>
        </div>
       
    )
}

export default App
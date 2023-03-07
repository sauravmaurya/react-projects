import useCounter from '../hooks/use-counter';
import Button from '../components/Button';


function CounterPage({initialCounter}){

    const {counter,increment} = useCounter(initialCounter)

    return(<div>
        <div>{counter}</div>
        <Button primary  onClick={increment}>Counter++</Button>
    </div>)
}

export default CounterPage;
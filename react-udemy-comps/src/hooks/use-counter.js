import {useState,useEffect} from 'react';

function useCounter(initialCounter){
    const [counter,setCounter] = useState(initialCounter)

    useEffect(()=>{
        console.log(counter)
    },[counter])

    const increment = ()=>{
        setCounter(counter+1)
    }

    return {
        counter:counter,
        increment:increment
    }
}

export default useCounter

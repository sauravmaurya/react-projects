import {useState} from 'react'
import AnimalShow from './AnimalShow';
import './App.css'

function App(){

    function getRandomAnimal(){
        const animals=["bird","cat","cow","dog","gator","horse"]
        return animals[Math.floor(Math.random()*animals.length)]   
    }
    
    const [animals,setAnimals] = useState([]);
    const clickHandler=()=>{
        setAnimals([...animals,getRandomAnimal()])
    }

    const renderedAnimals=animals.map((animal,index)=>{
       return <AnimalShow type={animal} key={index}/>
    })

    return(
        <div className='app'>
            <button onClick={clickHandler}>Add Animal</button>
            <div className='animal-list'>{renderedAnimals}</div>
        </div>
    )
}

export default App
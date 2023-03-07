import {useState} from 'react'
import './SearchBar.css'

function SearchBar({onSubmit}){
    const handleFormSubmit=(event)=>{
        event.preventDefault()
        console.log(`form is submitted`)

        onSubmit(term)
    }

    const [term,setTerm] = useState('')

    const handleChange=(event)=>{
        setTerm(event.target.value)
    }

    return(
        <div className='search-bar'>
            <form onSubmit={handleFormSubmit}>
                <label>Enter Search Term</label>
                <input value={term} onChange={handleChange} />
            </form>
        </div>
    )
}

export default SearchBar
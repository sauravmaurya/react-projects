import { useState, useContext } from 'react';
import BooksContext from '../context/books';

function BookEdit({ book, onSubmit }) {
    const { editBookByID } = useContext(BooksContext)


    const [title, setTitle] = useState(book.title)

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit()
        editBookByID(book.id, title)
    }

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    return <form className="book-edit" onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" onChange={handleChange} value={title} />
        <button className="button is-primary">Save</button>
    </form>
}

export default BookEdit;
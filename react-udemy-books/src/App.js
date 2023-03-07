import { useState,useEffect } from 'react'
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios'

function App() {
    const [books, setBooks] = useState([])

    const fetchBooks = async () => {
        const response = await axios.get("http://localhost:3001/books")

        setBooks(response.data)
    }

    useEffect(()=>{
        fetchBooks();
    },[])

    // Dont Do This : fetchBooks()

    const handleCreateBook = async (title) => {
        // BAD Code
        // books.push({id:123,title:title})
        // setBooks(books)

        const response = await axios.post("http://localhost:3001/books", {
            title: title
        })

        // const updatedBooks = [...books, {id:Math.floor(Math.random()*9999),title:title}]

        const updatedBooks = [...books, response.data]
        setBooks(updatedBooks)

        console.log(response)
    }

    const deleteBookById = async (id) => {
        const response = await axios.delete(`http://localhost:3001/books/${id}`)

        const updatedBooks = books.filter((book) => {
            return book.id !== id
        })

        setBooks(updatedBooks)
    }

    const editBookByID = async (id, title) => {

        const response = await axios.put(`http://localhost:3001/books/${id}`,{
            title:title
        })

        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                // return { ...book, title:title }
                return { ...book, ...response.data }
            }
            return book
        })
        setBooks(updatedBooks)
    }

    return (
        <div className='app'>
            <h1>Reading List</h1>
            <BookCreate onSubmit={handleCreateBook} />
            <BookList bookList={books} onDelete={deleteBookById} onEdit={editBookByID} />
        </div>
    )
}

export default App;
import {createContext,useState, useCallback} from 'react'
import axios from 'axios'

const BooksContext = createContext()

function Provider({children}){
    const [books, setBooks] = useState([])

    const fetchBooks = useCallback (async () => {
        const response = await axios.get("http://localhost:3001/books")

        setBooks(response.data)
    },[]);

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

    const valueToShare={
        books:books,
        fetchBooks:fetchBooks,
        handleCreateBook:handleCreateBook,
        editBookByID:editBookByID,
        deleteBookById:deleteBookById
    }

    return(
        <div>
            <BooksContext.Provider value={valueToShare}>
                {children}
            </BooksContext.Provider>
        </div>
    )
}

export {Provider}
export default BooksContext;

// imoport BooksContext,{Provider} from './somename'

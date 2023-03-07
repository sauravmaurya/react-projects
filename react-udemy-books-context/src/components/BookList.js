import { useContext } from "react";
import BookShow from "./BookShow";
import BooksContext from "../context/books";

function BookList() {
    const {books} = useContext(BooksContext)
    const renderedBookList = books.map((book) => {
        return(
            <BookShow book={book} key={book.id} />
        )
    })

    return ( 
        <div>
            <div className="book-list">{renderedBookList}</div>
        </div>
    )
}

export default BookList;
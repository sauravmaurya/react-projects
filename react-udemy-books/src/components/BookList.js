import BookShow from "./BookShow";

function BookList({ bookList, onDelete, onEdit }) {
    const renderedBookList = bookList.map((book) => {
        return <BookShow book={book} key={book.id} onDelete={onDelete} onEdit={onEdit}/>
    })

    return ( 
        <div>
            <div className="book-list">{renderedBookList}</div>
        </div>
    )
}

export default BookList;
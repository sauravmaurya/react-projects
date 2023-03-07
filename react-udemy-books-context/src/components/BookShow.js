import {useContext, useState} from 'react';
import BookEdit from './BookEdit';
import BooksContext from '../context/books';

function BookShow({book}){
    const{deleteBookById} = useContext(BooksContext)
    console.log("Books Show")

    const [showEdit,setShowEdit] = useState(false)

    const handleEditClick = ()=>{
        setShowEdit(!showEdit);
    }

    const handleDeleteClick = ()=>{
        deleteBookById(book.id);
    }

    const handleSubmit=()=>{
        setShowEdit(false)
    }

    let content = <h3>{book.title}</h3>
    if(showEdit){
        content= <BookEdit book={book} onSubmit={handleSubmit}/>
    }

    return  <div className="book-show">
            <img alt="book" src={`https://picsum.photos/seed/${book.id}300/200`}/>
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>Edit</button>
                <button className="delete" onClick={handleDeleteClick}>
                    Delete
                </button>
            </div>
        </div>
}

export default BookShow;
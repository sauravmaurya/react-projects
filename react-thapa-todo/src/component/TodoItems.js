import React from 'react'

function TodoItems({ items, deleteItem, editItem }) {
    const renderedList = items.map((item) => {
        return (
            <div className='eachItem' key={item.id}>
                <h3>{item.name}</h3>
                <div className='todo-btn'>
                    <i className="far fa-edit add-btn" onClick={() => editItem(item.id)}></i>
                    <i className="far fa-trash-alt add-btn" onClick={() => deleteItem(item.id)}></i>
                </div>
            </div>
        )
    })

    return (
        <>
            {renderedList}
        </>
    )
}

export default TodoItems

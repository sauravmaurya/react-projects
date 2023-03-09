import React, { useState, useEffect } from 'react'
import './style.css'
import TodoItems from './TodoItems'

const getLocalData = () => {
    const todoList = localStorage.getItem("todoList")

    if (todoList) {
        return JSON.parse(todoList)
    }
    else {
        return []
    }
}

function Todo() {

    const [items, setItems] = useState(getLocalData())
    const [inputData, setInputData] = useState("")
    const [todoToEdit, setTodoToEdit] = useState()
    const [isEditIcon, setIsEditIcon] = useState(false)

    const handleInputText = (e) => {
        setInputData(e.target.value)
    }

    const handleAddItem = () => {
        if (!inputData) {
            alert("please input a task")
            return;
        }
        else if (inputData && isEditIcon) {
            const updatedItems = items.map((item) => {
                console.log(item)
                if (item.id === todoToEdit) {
                    return { ...item, name: inputData }
                }
                return item
            })

            setItems(updatedItems)
            setIsEditIcon(false)
            setInputData("")
            setTodoToEdit()
        }
        else {
            const newInputData = {
                id: new Date().getTime().toString(),
                name: inputData,
            }
            setItems([...items, newInputData])
            setInputData("")
        }

    }

    const handleDeleteItem = (id) => {
        const updatedList = items.filter((item) => {
            return item.id !== id
        })

        setItems(updatedList)
    }

    const handleRemoveAll = () => {
        setItems([])
    }

    const handleEditItem = (index) => {
        const itemToEdit = items.find((item) => {
            return item.id === index
        })

        setIsEditIcon(true)
        setInputData(itemToEdit.name)
        setTodoToEdit(index)

    }

    // const handleSaveEditItem = () => {
    //     items.map((item) => {
    //         if (item.id === todoToEdit) {
    //             return { ...item, name: inputData }
    //         }
    //     })

    //     setIsEditIcon(false)
    //     setInputData("")
    // }

    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(items))
    }, [items])

    return (
        <>
            <div className='main-div'>
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.svg" alt="todologo" />
                        <figcaption>Add Your List Here ✌</figcaption>
                    </figure>
                    <div className='addItems'>
                        <input placeholder="✍️ Add Item" className='form-control' value={inputData} onChange={handleInputText}></input>
                        {isEditIcon ? <i className="far fa-edit add-btn" onClick={handleAddItem}></i> : <i className="fa fa-plus add-btn" onClick={handleAddItem}></i>}

                    </div>
                    {/* show our items */}
                    <div className="showItems">
                        <TodoItems items={items} deleteItem={handleDeleteItem} editItem={handleEditItem}></TodoItems>
                    </div>
                    {/* remove all button */}
                    <div className='showItems'><button className='btn effect04' data-sm-link-text="REMOVE" onClick={handleRemoveAll}><span>CHECK LIST</span></button></div>
                </div>
            </div>
        </>
    )
}

export default Todo

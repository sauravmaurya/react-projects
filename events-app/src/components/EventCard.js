import React, { useState, useContext } from 'react'
import EventsContext from '../context/events';
import EditEvent from './EditEvent';

function EventCard({ eventData, email }) {

    const { deleteEvent } = useContext(EventsContext)

    const { id, name, date, description, price, category } = eventData
    const [showEdit, setShowEdit] = useState(false)

    const removeCard = () => {
        deleteEvent(id, email)
    }

    const editCard = () => {
        setShowEdit(!showEdit)
        console.log(showEdit)
    }

    const saveEdit = () => {
        setShowEdit(false)
    }

    return (
        <>
            <li className={`event_card ${category}`}>
                <div className="event_card_body">
                    <div className='event_card_category'>{category}</div>
                    <div className="event_card_title">{name}</div>
                    <p className="event_card_desc">{description}</p>
                    <span className="event_card_price">{`₹${price}`}</span>
                    <span className="event_card_date">{date}</span>

                </div>
                <div className='event_card_cta'>
                    <button className='btn btn-success me-3' onClick={editCard} >Edit</button>
                    <button className='btn btn-danger' onClick={removeCard}>Remove</button>
                </div>
            </li>
            {showEdit && <EditEvent id={id} email={email} saveEdit={saveEdit} />}
        </>
    )
}

export default EventCard

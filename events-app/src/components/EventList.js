import React, { useEffect, useContext } from 'react'
import EventsContext from '../context/events';
import EventCard from './EventCard';

function EventList({ email }) {
    const { events, fetchEvents } = useContext(EventsContext)
    useEffect(() => {
        async function fetchdata() {
            fetchEvents(email)
        }
        fetchdata()
    }, [])

    console.log(events)

    const renderedList = events.map((event) => {
        return <EventCard eventData={event} email={email} />
    })

    return (
        <>
            <div className='event-list-header'>Events List</div>
            <ul className='event-card-container container'>
                {renderedList}
            </ul>
        </>
    )
}

export default EventList

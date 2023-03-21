import { createContext, useState, useCallback } from 'react'
import axios from 'axios'

const EventsContext = createContext()

function Provider({ children }) {
    const [events, setEvents] = useState([])

    const fetchEvents = useCallback(async (email) => {
        const response = await axios.get(`http://localhost:3001/users/${email}`)
        setEvents(response.data.events)
    }, []);

    const createEvent = async (data, email) => {
        // const getResponse = await axios.get(`http://localhost:3001/users/${email}`)
        // const eventsList = getResponse.data.events
        const newEventsList = [...events, data]

        const response = await axios.patch(`http://localhost:3001/users/${email}`, {
            events: newEventsList
        })
        setEvents(newEventsList)
    }

    const editEvent = async (id, email, data) => {

        const updatedEvents = events.map((event) => {
            if (event.id === id) {
                // return { ...book, title:title }
                return { ...event, ...data }
            }
            return event
        })

        const response = await axios.patch(`http://localhost:3001/users/${email}`, {
            events: updatedEvents
        })

        setEvents(updatedEvents)
    }

    const deleteEvent = async (id, email) => {
        const updatedEvents = events.filter((event) => {
            return event.id !== id
        })

        const response = await axios.patch(`http://localhost:3001/users/${email}`, {
            events: updatedEvents
        })

        setEvents(updatedEvents)
    }

    const valueToShare = {
        events: events,
        setEvents: setEvents,
        fetchEvents: fetchEvents,
        createEvent: createEvent,
        editEvent: editEvent,
        deleteEvent: deleteEvent
    }

    return (
        <div>
            <EventsContext.Provider value={valueToShare}>
                {children}
            </EventsContext.Provider>
        </div>
    )
}

export { Provider }
export default EventsContext;

// imoport BooksContext,{Provider} from './somename'

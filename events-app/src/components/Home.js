import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CreateEvent from './CreateEvent'
import EventList from './EventList'

export default function Home() {
    const usenavigate = useNavigate()
    const [sessionUser, setSessionUser] = useState()
    const [sessionEmail, setSessionEmail] = useState()
    useEffect(() => {
        let sessionUserVal = sessionStorage.getItem("username")
        let sessionEmailValue = sessionStorage.getItem("email")
        if (sessionUserVal === null || sessionUserVal === '') {
            usenavigate("/login")
        }
        else {
            setSessionUser(sessionUserVal)
            setSessionEmail(sessionEmailValue)
        }
    }, []);
    return (
        <div className='home-wrapper'>
            <div className='home_header'>
                <ul>
                    <li className="home-username">
                        {`Welcome ${sessionUser}`}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Login">Logout</Link>
                    </li>
                </ul>
            </div>
            <CreateEvent email={sessionEmail} />
            <EventList email={sessionEmail} />
        </div>
    )
}

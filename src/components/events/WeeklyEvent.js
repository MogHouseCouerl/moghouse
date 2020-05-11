import React from 'react'
import WeeklyEvents from './weeklyEvents'

const WeeklyEvent = ({ event }) => {
    return (
        <div>
            <h3>Event name: {event.name}</h3>
            <p>Description: {event.description}</p>
            <div>
                <p>Schedule" {event.date} at {event.time}</p>
            </div>
        </div>
    )
}

export default WeeklyEvents
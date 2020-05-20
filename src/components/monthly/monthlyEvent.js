import React from 'react'

const MonthlyEvent = ({ event }) => {
    return (
        <div className='box'>
            <h3>Event name: {event.name}</h3>
            <p>Description: {event.description}</p>
            <div>
                <p>Schedule" {event.date} at {event.time}</p>
            </div>
        </div>
    )
}

export default MonthlyEvent
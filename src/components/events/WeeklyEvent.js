import React, { useState } from 'react'
import { connect } from 'react-redux'
import { editEvent, setEditing, del } from '../../actions/actions'

const WeeklyEvent = ({ event, editing, error, editEvent, setEditing, del }) => {
    const [update, setUpdate] = useState({
        name: '',
        description: '',
        date: '',
        time: ''
    })

    const handleChange = event => {
        setUpdate({ ...update, [event.value.name]: event.value.target })
    }

    const handleSubmit = event => {
        event.preventDefault()
        editEvent(event.id, update)
    }

    return (
        <div className='box'>
            {editing ? (
                <form onSubmit={handleSubmit}>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' name='name' onChange={handleChange} />
                    <label htmlFor='description'>Description</label>
                    <input type='text' id='description' name='description' onChange={handleChange} />
                    <label htmlFor='date'>Date</label>
                    <input type='text' id='date' name='date' onChange={handleChange} />
                    <label htmlFor='time'>Time</label>
                    <input type='text' id='time' name='name' onChange={handleChange} />
                    <button type='submit'>Edit</button>
                </form>
            ) : (

                    <div>
                        <h3>Event name: {event.name}</h3>
                        <p>Description: {event.description}</p>
                        <div>
                            <p>Schedule" {event.date} at {event.time}</p>
                        </div>
                        {localStorage.getItem('token') && (
                            <div>
                                <button type='button' onClick={() => setEditing()}>Edit</button>
                                <button type='button' onClick={() => del(event.id)}>Delete</button>
                            </div>
                        )}
                    </div>
                )}
        </div>
    )
}

const mstp = state => {
    return {
        editing: state.editing,
        error: state.error
    }
}

export default connect(mstp, { editEvent, setEditing, del })(WeeklyEvent)
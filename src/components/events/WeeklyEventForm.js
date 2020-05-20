import React, { useState } from 'react'
import axiosWithAuth from '../../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'

const WeeklyEventForm = () => {
    const history = useHistory()

    const [weekly, setWeekly] = useState({
        name: '',
        description: '',
        date: '',
        time: ''
    })

    const handleChange = event => {
        setWeekly({ ...weekly, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        axiosWithAuth().post('https://mogserver.herokuapp.com/api/mogmod/weekly', weekly)
            .then(res => {
                history.push('/weekly')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <form onSubmit={handleSubmit} className='form'>
            <label>Event Name</label>
            <input type='text' name='name' id='name' onChange={handleChange} />
            <label>Event Description</label>
            <input type='text' name='description' id='description' onChange={handleChange} />
            <label>Event Date</label>
            <input type='text' name='date' id='date' onChange={handleChange} />
            <label>Event Time</label>
            <input type='text' name='time' id='time' onChange={handleChange} />
            <button type='submit'>Submit weekly event</button>
        </form>
    )
}

export default WeeklyEventForm
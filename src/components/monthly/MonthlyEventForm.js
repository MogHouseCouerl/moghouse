import React, { useState } from 'react'
import axiosWithAuth from '../../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'

const MonthlyEventForm = () => {
    const history = useHistory()

    const [monthly, setMonthly] = useState({
        name: '',
        description: '',
        date: '',
        time: ''
    })

    const handleChange = event => {
        setMonthly({ ...monthly, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        axiosWithAuth().post('https://mogserver.herokuapp.com/api/mogmod/monthly', monthly)
            .then(res => {
                history.push('/monthly')
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
            <button type='submit'>Submit monthly event</button>
        </form>
    )

}

export default MonthlyEventForm
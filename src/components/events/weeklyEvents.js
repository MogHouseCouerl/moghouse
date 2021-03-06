import React, { useState, useEffect } from 'react'
import WeeklyEvent from './WeeklyEvent'
import axios from 'axios'

const WeeklyEvents = () => {
    const [weekly, setWeekly] = useState([])

    useEffect(() => {
        axios.get('https://cors-anywhere.herokuapp.com/https://mogserver.herokuapp.com/api/moghouse/weekly')
            .then(res => {
                setWeekly(res.data)
            })
            .catch(err => {
            })
    }, [])
    return (
        <div>
            {weekly.map(item => {
                return <WeeklyEvent event={item} />
            })}
        </div>
    )
}

export default WeeklyEvents
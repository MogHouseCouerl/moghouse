import React, { useState, useEffect } from 'react'
import MonthlyEvent from './monthlyEvent'
import axios from 'axios'

const MonthlyEvents = () => {
    const [monthly, setmonthly] = useState([])
    //https://cors-anywhere.herokuapp.com/https://joke-api-strict-cors.appspot.com/jokes/random
    useEffect(() => {
        axios.get('https://cors-anywhere.herokuapp.com/https://mogserver.herokuapp.com/api/moghouse/monthly')
            .then(res => {
                setmonthly(res.data)
            })
            .catch(err => {
            })
    }, [])
    return (
        <div>
            {monthly.map(item => {
                return <MonthlyEvent event={item} />
            })}
        </div>
    )
}

export default MonthlyEvents
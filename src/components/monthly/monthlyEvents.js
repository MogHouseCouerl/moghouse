import React, { useState, useEffect } from 'react'
import MonthlyEvent from './monthlyEvent'
import axios from 'axios'

const MonthlyEvents = () => {
    const [monthly, setmonthly] = useState([])

    useEffect(() => {
        axios.get('https://mogserver.herokuapp.com/api/moghouse/monthly')
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
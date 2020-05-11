import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const history = useHistory()

    const handleChange = event => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        axios.post('https://mogserver.herokuapp.com/api/officers/register', user)
            .then(res => {
                history.push('/login')
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='username'>User name</label>
            <input id='username' name='username' type='test' onChange={handleChange} />
            <label htmlFor='password'>Password</label>
            <input id='password' name='password' type='password' onChange={handleChange} />
            <button type='submit'>Register</button>
        </form>
    )
}

export default Register
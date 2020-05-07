import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const handleChange = event => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        axios.post('https://mogserver.herokuapp.com/api/officers/register', user)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <form>
            <label htmlFor='username'>User name</label>
            <input id='username' name='username' type='test' />
            <label htmlFor='password'>Password</label>
            <input id='password' name='password' type='password' />
            <button type='submit'>Register</button>
        </form>
    )
}

export default Register
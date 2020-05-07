import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {
    const [officer, setOfficer] = useState({
        username: '',
        password: ''
    })

    const handleChange = event => {
        setOfficer({ ...officer, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        axios.post('https://mogserver.herokuapp.com/api/officers/login', officer)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='username'>Username</label>
            <input name='username' id='username' type='text' value={officer.username} onChange={handleChange} />
            <label htmlFor='password'>Password</label>
            <input name='password' id='password' type='password' value={officer.password} onChange={handleChange} />
            <button type='submit'>Log In</button>
            <bold>NOT READY</bold>
        </form>
    )
}

export default Login
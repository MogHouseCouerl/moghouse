import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [officer, setOfficer] = useState({
        username: '',
        password: ''
    })

    const history = useHistory()

    const handleChange = event => {
        setOfficer({ ...officer, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        axios.post('https://cors-anywhere.herokuapp.com/https://mogserver.herokuapp.com/api/officers/login', officer)
            .then(res => {
                history.push('/')
                localStorage.setItem('token', res.data.payload)
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    return (
        <form onSubmit={handleSubmit} className='auth'>
            <label htmlFor='username'>Username</label>
            <input name='username' id='username' type='text' value={officer.username} onChange={handleChange} />
            <label htmlFor='password'>Password</label>
            <input name='password' id='password' type='password' value={officer.password} onChange={handleChange} />
            <button type='submit'>Log In</button>
        </form>
    )
}

export default Login
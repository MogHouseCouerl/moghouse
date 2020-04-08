import React, { useState } from 'react'

const AddMember = () => {
    const [member, setMember] = useState({
        firstname: '',
        lastname: '',
        class: '',
        level: 0
    })

    const handleChange = event => {
        setMember({ ...member, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        //add post request to add member
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='firstname'>First Name</label>
            <input type='text' id='firstname' name='firstname' onChange={handleChange} />

            <label htmlFor='lastname'>Last Name</label>
            <input type='text' id='lastname' name='lastname' onChange={handleChange} />

            <label htmlFor='class'> Main Class</label>
            <input type='text' id='class' name='class' onChange={handleChange} />

            <label htmlFor='level'>Level</label>
            <input type='number' id='level' name='level' onChange={handleChange} />
            <button type='submit'>Add Member</button>
        </form>
    )
}
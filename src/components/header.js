import React from 'react'

const Header = ({ Estate }) => {
    console.log(Estate)
    return (
        <header>
            {Estate ? (
                <h1>{Estate.Greeting}!</h1>
            ) : (
                    null
                )}
        </header>
    )
}

export default Header
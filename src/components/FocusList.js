import React, { useState, useEffect } from 'react'
import Focus from './Focus'

const FocusList = (props) => {
    const [item, setItem] = useState([])

    useEffect(() => {
        props.focus && setItem(props.focus.filter(focus => focus.Status === true))
    }, [props.focus])

    return (
        <>
            <h3>Our Focus</h3>
            <div id='focus'>
                {item ? (
                    item.map(focus => {
                        return (

                            <Focus focus={focus} />

                        )
                    })
                ) : (
                        null
                    )}
            </div>
        </>
    )
}

export default FocusList
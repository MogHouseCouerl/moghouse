import React, { useState, useEffect } from 'react'
import Focus from './Focus'

const FocusList = (props) => {
    const [item, setItem] = useState([])

    useEffect(() => {
        props.focus && setItem(props.focus.filter(focus => focus.Status === true))
    }, [props.focus])

    return (
        <>
            {item ? (
                item.map(focus => {
                    return <Focus focus={focus} />
                })
            ) : (
                    null
                )}
        </>
    )
}

export default FocusList
import React from 'react'

const SeekingList = (props) => {
    console.log('seeking list ', props.seeking)
    return (
        <>
            {props.seeking ? (
                props.seeking.map(seeking => {
                    return <p>{seeking.Name}</p>
                })
            ) : (
                    null
                )}
        </>
    )
}

export default SeekingList
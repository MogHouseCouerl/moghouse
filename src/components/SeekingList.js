import React from 'react'

const SeekingList = (props) => {
    console.log('seeking list ', props.seeking)
    return (
        <>
            <h3>We Are Currently Seeking</h3>
            <div id='seeking'>
                {props.seeking ? (
                    props.seeking.map(seeking => {
                        return <p>{seeking.Name}</p>
                    })
                ) : (
                        null
                    )}
            </div>
        </>
    )
}

export default SeekingList
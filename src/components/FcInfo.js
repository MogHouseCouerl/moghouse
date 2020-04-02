import React from 'react'
import FocusList from './FocusList'
import SeekingList from './SeekingList'

const FcInfo = (props) => {
    console.log(props)
    return (
        <>
            {props.fc ? (
                <>
                    <section>
                        <h2>{props.fc.Name}</h2>
                        <p>{props.fc.Slogan}</p>
                        <p>Members: {props.fc.ActiveMemberCount}</p>
                        <FocusList focus={props.fc.Focus} />
                    </section>
                    <section>
                        <SeekingList seeking={props.fc.Seeking} />
                    </section>
                </>
            ) : null}
        </>
    )
}

export default FcInfo
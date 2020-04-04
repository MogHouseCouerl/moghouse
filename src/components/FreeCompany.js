import React from 'react'
import Header from './header'
import FcInfo from './FcInfo'
import Footer from './Footer'

const FreeCompany = ({ props }) => {
    return (
        <>
            {props && <Header Estate={props.fc.Estate} />}
            <div id='container'>
                {props && <FcInfo fc={props.fc} />}
            </div>
            {props && <Footer fc={props.fc} estate={props.fc.Estate} />}
        </>
    )
}

export default FreeCompany
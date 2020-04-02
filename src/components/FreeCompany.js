import React from 'react'
import Header from './header'
import FcInfo from './FcInfo'
import Footer from './Footer'

const FreeCompany = ({ props }) => {
    return (
        <>
            <div id='container'>
                {props && <Header Estate={props.fc.Estate} />}
                {props && <FcInfo fc={props.fc} />}
                {props && <Footer fc={props.fc} estate={props.fc.Estate} />}
            </div>
        </>
    )
}

export default FreeCompany
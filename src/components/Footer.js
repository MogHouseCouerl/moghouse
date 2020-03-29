import React from 'react'

const Footer = ({ fc, estate }) => {
    return (
        <>
            {fc ? (
                <footer>
                    <p>Data Center: Crystal</p>
                    <p>Server: {fc.Server}</p>
                    {estate ? (
                        <p>Estate: {estate.Plot}</p>
                    ) : (
                            null
                        )}
                </footer>
            ) : (
                    null
                )}
        </>
    )
}

export default Footer
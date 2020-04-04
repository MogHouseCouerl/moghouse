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
                    <p>discord: <a href='https://discord.gg/9ZpSgwr'>Join Us on Discord!</a> </p>
                </footer>
            ) : (
                    null
                )}
        </>
    )
}

export default Footer
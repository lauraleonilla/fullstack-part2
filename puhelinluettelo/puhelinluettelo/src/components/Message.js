import React from 'react'

const Message = ({ message }) => {
    if(message === null) {
        return null
    }
    return (
        <div className='message'>
            { message }
        </div>
    )
}

const Error = ({ message }) => {
    if(message === null) {
        return null
    }
    return (
        <div className='error'>
            { message }
        </div>
    )
}

export {
    Message, 
    Error }
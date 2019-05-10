import React from 'react'
import Person from './Person'

const Contacts = ({ contacts }) => {
    return (
        <div>
             <h2>Numerot</h2>
            <div>
                {contacts.map(e => <Person key={e.name} contacts={e}/>)}
            </div>
        </div>
    )
}

export default Contacts
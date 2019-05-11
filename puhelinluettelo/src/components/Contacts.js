import React from 'react'
import Person from './Person'

const Contacts = ({ contacts, remove }) => {
    return (
        <div>
             <h2>Numerot</h2>
            <div>
                {contacts.map(e => <Person key={e.id} contacts={e} remove={remove}/>)}
            </div>
        </div>
    )
}

export default Contacts
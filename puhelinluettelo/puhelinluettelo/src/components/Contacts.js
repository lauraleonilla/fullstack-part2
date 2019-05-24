import React from 'react'
import Person from './Person'

const Contacts = ({ contacts, remove }) => {
    return (
        <div>
             <h2>Numerot</h2>
            <div>
                {contacts.map(e => 
                <Person 
                key={e.name} 
                contacts={e} 
                remove={() => remove(e.id)}/>)}
            </div>
        </div>
    )
}

export default Contacts
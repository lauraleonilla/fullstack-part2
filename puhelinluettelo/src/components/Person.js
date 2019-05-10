import React from 'react'

const Person = ({ contacts, removeContact }) => {
  return (
      <div>
          <p>{contacts.name} {contacts.number}</p>
          <button onClick={removeContact}>Poista</button>
      </div>
  )
}

export default Person
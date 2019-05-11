import React from 'react'

const Person = ({ contacts, remove }) => {
  return (
      <div>
          <p>{contacts.name} {contacts.number}</p>
          <button onClick={remove}>Poista</button>
      </div>
  )
}

export default Person
import React from 'react'

const Person = ({ contacts, remove }) => {
  return (
      <div>
          <p>{contacts.name} {contacts.number} <button onClick={remove}>Poista</button> </p>
      </div>
  )
}

export default Person
import React from 'react'

const Person = ({ contacts }) => {
  return (
      <div>
          <p>{contacts.name} {contacts.number}</p>
      </div>
  )
}

export default Person
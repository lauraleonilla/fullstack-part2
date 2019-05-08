import React from 'react'


const Title = ({ course }) => {
    return (
        <div>
            {course.map(e => <h1 key={e.name}>{e.name}</h1>)}
            {course.map(e => e.parts.map(j => <p key={j.name}>{j.name}</p>))}
        </div>
    )
}

const Course = ({ course }) => {
    return (
        <div>
           <Title course={course}/>
        </div>
    )
}

export { Course }
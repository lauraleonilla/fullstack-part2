import React from 'react'

const Content = ({ course }) => {
    return (
        <div>
            {course.map(e => 
                [<h1 key={e.name}>{e.name}</h1>, 
                <div key={e.id}>
                    {e.parts.map(j =>
                    <p key={j.name}>{j.name} {j.exercises}</p>)}
                    <Total parts={e.parts} />
                </div>]
            )}
        </div>
    )
}

const Total = ({ parts }) => {
    const number = []
    parts.map(e => number.push(e.exercises))
    const total = number.reduce((a, c) => {
        return a + c
    }, 0)
    return <p>Yhteensä {total} tehtävää</p>
  }

const Course = ({ course }) => {
    return (
        <div>
           <Content course={course}/>
        </div>
    )
}

export { Course }
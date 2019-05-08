import React from 'react'


const Content = ({ course }) => {
    const exec = course.map(e => e.parts.map(j => j.exercises))
    const reducer = exec.reduce((a, c) => a + c)
    return (
        <div>
            {course.map(e => 
                [<h1 key={e.name}>{e.name}</h1>, 
                <div key={e.id}>
                {e.parts.map(j =>
                <p key={j.name}>{j.name} {j.exercises}</p>)}
                <p>Yhteensä tehtävää</p>
                </div>])}
        </div>
    )
}

const Course = ({ course }) => {
    return (
        <div>
           <Content course={course}/>
        </div>
    )
}

export { Course }
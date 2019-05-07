import React from 'react'

const Course = ({ course }) => {
    const headers = () => course.map(e => 
        <Header key={e.id} course={e}/>
    ) 
    const courses = course.map(e => e.parts)
    const parts = courses.map(u => u.map(k => k))
    const res = () =>  parts.map(u =>  
        <Content key={u.id} course={u} />
        )
    return (
        <div>
            {headers()}
            {res()}
            <Total parts={course}/> 
        </div>
    )
}

const Header = ({ course }) => {
    return (
        <h1>{course.name}</h1>
    )    
} 

const Part = ({ course }) => {
    return (
        course.map(e => {
            return  <p key={e.id}>{e.name} {e.exercises}</p>})
    )
}

const Content = ({ course }) => {
   return (
  <div>
    <Part course={course} />
  </div>
    )
}

const Total = ({ parts }) => {
    const exercices = parts.map(e => e.parts)
    const number = []
    exercices.map(e => e.map(u => number.push(u.exercises)))
    const total = number.reduce((a, c) => {
        return a + c
    }, 0)
    return <p>Yhteensä {total} tehtävää</p>
  }



export default Course
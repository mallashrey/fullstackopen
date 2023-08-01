const Header = (props) => {
  return(
    <div>
      <p>{props.course}</p>
    </div>
  )
}

const Part = (props) => {
  return(
    <p>{props.part} {props.exercise}</p>
  )
}

const Content = (props) => {
return(
  <div>
    <Part part={props.p1} exercise={props.e1}/>
    <Part part={props.p2} exercise={props.e2}/>
    <Part part={props.p3} exercise={props.e3}/>
  </div>
)
}

const Total = (props) => {
  return(
    <div>
      <p>Number of exercises {props.exercise1 + props.exercise2 + props.exercise3}</p>
    </div>
  )
}

const App = () => {
    const course = {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        }
      ]
    }

  return (
    <div>
      <Header course={course.name}/>
      <Content p1={course.parts[0].name} p2={course.parts[1].name} p3={course.parts[2].name} e1={course.parts[0].exercises} e2={course.parts[1].exercises} e3={course.parts[2].exercises}/>
      <Total exercise1={course.parts[0].exercises} exercise2={course.parts[1].exercises} exercise3={course.parts[2].exercises}/>
    </div>
  )
}

export default App
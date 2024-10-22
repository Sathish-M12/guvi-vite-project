import React from 'react'

const Todo = (props) => {
  return (
   ///<li>{props.todo.title}{props.todo.completed && "✔"}</li>

    <li>{props.todo.title}{props.todo.completed ? "✔" : "✘"}</li>
  )
}

export default Todo
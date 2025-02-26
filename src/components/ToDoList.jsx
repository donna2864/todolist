import React from 'react'
import ToDoCard from './toDoCard'

export default function ToDoList(props) {
  const {todoitem} = props
  return (
    <ul className='main'>
      {todoitem.map((todoitem, todoIndex) => {
        return (
          <ToDoCard {...props} key={todoIndex} index={todoIndex}>
            <p>{todoitem}</p>
          </ToDoCard>
        )
      })}
    </ul>
  )
}

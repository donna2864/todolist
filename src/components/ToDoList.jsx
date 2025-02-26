import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
  const { todos, handleCompleteTodo } = props

  return (
    <ul className='main'>
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard {...props} key={todoIndex} index={todoIndex} todo={todo} handleCompleteTodo={handleCompleteTodo}>
            <p>{todo.text}</p>
          </TodoCard>
        )
      })}
    </ul>
  )
}
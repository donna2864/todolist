import React from 'react'

export default function TodoCard(props) {
  const { children, handleDeleteTodo, index, handleEditTodo, handleCompleteTodo, todo } = props
  return (
    <li className={`todoItem ${todo.completed ? 'completed' : ''}`}>
      {children}
      <div className='actionsContainer'>
        <button onClick={() => handleCompleteTodo(index)}>
          <i className="fa-solid fa-check"></i>
        </button>
        <button onClick={() => handleEditTodo(index)}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => handleDeleteTodo(index)}>
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  )
}
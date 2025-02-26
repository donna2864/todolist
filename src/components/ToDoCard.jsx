import React from 'react'

export default function ToDoCard(props) {
  const {children, handleDeleteTodoItem, handleEditTodoItem, index} = props
  return (
    <li className='todoItem'>
      {children}
    <div className='actionsContainer'>
      <button onClick={() =>{
        handleEditTodoItem(index)
      }}>
        <i class="fa-solid fa-pen-to-square"></i>
      </button>
      <button onClick={() => {
        handleDeleteTodoItem(index)}}>
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
    </li>
  )
}

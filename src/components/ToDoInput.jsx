import React, { useState } from 'react'

export default function TodoInput(props) {
  const {handleAddTodoItem, todoValue, setTodoValue} = props

  return (
    <header>
      <input value={todoValue} onChange={(e) => {
        setTodoValue(e.target.value)
      }} placeholder='Enter your task...' />
      <button onClick={() => {
        handleAddTodoItem(todoValue)
        setTodoValue('') // empty the input field after adding aka reset value
      }}>Add</button>
    </header>
  )
}

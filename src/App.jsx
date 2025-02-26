import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  function handleAddTodos(newTodo) {
    const newTodoItem = { text: newTodo, completed: false }
    const newTodoList = [...todos, newTodoItem]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index].text
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  function handleCompleteTodo(index) {
    const newTodoList = todos.map((todo, todoIndex) => {
      if (todoIndex === index) {
        return { ...todo, completed: !todo.completed }
      }
      return todo
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }

    console.log(localTodos)
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  }, [])

  return (
    <>
      <h1>To Do App</h1>
      <h3> Get you're work done🫡</h3>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} handleCompleteTodo={handleCompleteTodo} todos={todos} />
    </>
  )
}

export default App

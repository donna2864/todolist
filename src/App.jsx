import { useState, useEffect } from "react"
import TodoInput from "./components/todoinput"
import ToDoList from "./components/todolist"

function App() {
  //Stateful Variable
  // const [todoitem, setTodoitem] = useState([
  //   'Learn react Today',
  //   'Read Bible',
  //   'take joshva to the bakery'
  // ])  static todo items

  const [todoitem, setTodoitem] = useState([])//empty array
  const [todoValue, setTodoValue] = useState('') 

  //to persist data in local storage
  function persistData(newList){
    localStorage.setItem('todoitem', JSON.stringify({todoitem: newList}))
  }

  // repainting the DOM -- reason for stateful variable
  function handleAddTodoItem(newTodoItem) {
    const newTodoList = [...todoitem, newTodoItem]
    persistData(newTodoList)
    //update to do
    setTodoitem(newTodoList)
  }

  function handleDeleteTodoItem(index){
    const newTodoList = todoitem.filter((todoitem, todoIndex) => {
      return todoIndex != index
    })
    persistData(newTodoList)
    setTodoitem(newTodoList)
  }

  function handleEditTodoItem(index){
    const valueToEdit = todoitem[index]
    setTodoValue(valueToEdit)
    handleDeleteTodoItem(index)
  }

  useEffect(() => {
    if(!localStorage){
      return
    }
    let localTodo = localStorage.getItem('todoitem')
    if(!localTodo){
      return
    }
    localTodo = JSON.parse(localTodo).todoitem
    setTodoitem(localTodo)
  }, [])

  return (
    <main>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodoItem={handleAddTodoItem}/>
      <ToDoList handleEditTodoItem={handleEditTodoItem} handleDeleteTodoItem={handleDeleteTodoItem} todoitem={todoitem}/>
    </main>
  )
}

export default App
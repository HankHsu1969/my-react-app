import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: '學習 React', done: false },
    { id: 2, text: '建立 GitHub 專案', done: false },
  ])
  const [input, setInput] = useState('')

  const addTodo = () => {
    const text = input.trim()
    if (!text) return
    setTodos([...todos, { id: Date.now(), text, done: false }])
    setInput('')
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id))
  }

  const handleKey = (e) => {
    if (e.key === 'Enter') addTodo()
  }

  return (
    <div className="app">
      <h1>Todo List</h1>
      <div className="input-row">
        <input
          type="text"
          placeholder="新增待辦事項..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKey}
        />
        <button onClick={addTodo}>新增</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className={todo.done ? 'done' : ''}>
            <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
            <button className="delete" onClick={() => deleteTodo(todo.id)}>✕</button>
          </li>
        ))}
      </ul>
      <p className="count">
        {todos.filter(t => !t.done).length} / {todos.length} 項未完成
      </p>
    </div>
  )
}

export default App

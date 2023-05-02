import React, { useState } from 'react'
import { Todo, TodoList } from './assets/types'
import './App.css'

function App() {
	const [todos, setTodos] = useState<TodoList>([
		{title: "Reacts Rocks!", completed: true,},
		{title: "Cool", completed: false},
		{title: "WHAAAT!", completed: true},
	])

	const [newTodoTitle, setNewTodoTitle] = useState("")

	const toggleTodo = (todo: Todo) => {
		todo.completed = !todo.completed

		setTodos([...todos])
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		const newTodo: Todo = {
			title: newTodoTitle,
			completed: false,
		}

		setTodos([...todos, newTodo])

		setNewTodoTitle("")
	}

	return (
		<div className='App'>
		<h1>React Todo</h1>

		<form onSubmit={handleSubmit} className="mb-3">
			<div className="input-group mb-3">
				<input
				type="text"
				className="form-control"
				placeholder='Create Todo'
				onChange={e => setNewTodoTitle(e.target.value)}
				value={newTodoTitle}
				/>
				<button className="btn btn-success mb">Lägg till</button>
			</div>
		</form>

		<hr />

		<ul className="todolist">
			{todos.map((todo, index) => (
				<li className={'todo' + todo.completed ? ' done' : ''} key={index}>
					<span className="todo-title">
						{todo.title}
					</span>
					<span className="todo-toggle" role="button" onClick={() => toggleTodo(todo)}>
						{todo.completed ? '✔️' : '✅'}
					</span>
					<span className="todo-delete" role="button">
						🗑️
					</span>
				</li>
			) )}
		</ul>

		</div>
		)
	}

	export default App

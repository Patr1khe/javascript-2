import React, { useEffect, useState } from 'react'
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

	const deleteTodo = (todoToDelete: Todo) => {
		// set a new list of todos where the clicked todo is excluded
		setTodos(todos.filter(todo => todo !== todoToDelete))
	}

	const unfinishedTodos = todos.filter(todo => !todo.completed)
	const finishedTodos = todos.filter(todo => todo.completed)

	// This will only be executed when the component is mounted,
	// and only AFTER the component has been rendered
	useEffect(() => {
		console.log("Look mom, I'm a newly mounted component 👶🏻")
	}, [])

	// Our first side-effect
	useEffect( () => {
		console.log("Updating page title using an effect")
		document.title = `${finishedTodos.length} of ${todos.length} completed`
	}, [finishedTodos.length, todos.length] )

	console.log("Rendering...")

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
				<button className="btn btn-success mb">Create</button>
			</div>
		</form>

		<hr />
		{todos.length > 0 && (
			<>
				<div className="pos mb-3 d-flex p-3 card">
					<div className="fcompleted mb-3 card">
						<h2>uncompleted</h2>
						<ul className="todolist">
							{todos.filter(todo => todo.completed === false).map((todo, index) => (
								<li className={todo.completed ? 'done' : ''} key={index}>
									<span className="todo-title">
										{todo.title}
									</span>
									<span className="ms-1">
										<span className="todo-toggle" onClick={() => toggleTodo(todo)} role="button">
											{todo.completed ? '🔙' : '✅'}
										</span>
										<span className="todo-delete" onClick={() => deleteTodo(todo)} role="button">
											🗑️
										</span>
									</span>
								</li>
							) )}
						</ul>
					</div>
					<div className='tcompleted mb-3 card'>
						<h2>completed</h2>
						<ul className="todolist">
							{todos.filter(todo => todo.completed === true).map((todo, index) => (
								<li className={'todo' + todo.completed ? ' done' : ''} key={index}>
									<span className="todo-title">
										{todo.title}
									</span>
									<span className="todo-toggle" role="button" onClick={() => toggleTodo(todo)}>
										{todo.completed ? '✔️' : '✅'}
									</span>
									<span className="todo-delete" onClick={() => deleteTodo(todo)} role="button">
												🗑️
									</span>
								</li>
							) )}
						</ul>
					</div>
				</div>
				<p className="status">
						{finishedTodos.length} of {todos.length} todos completed
				</p>
			</>
		)}
		{todos.length === 0 && (<p className='text text-danger'>Empty todos, pls create moar!</p>)}

		</div>
		)
	}

	export default App

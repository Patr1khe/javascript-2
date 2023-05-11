import React, { useEffect, useState } from 'react'
import { Todo, TodoList } from './assets/types'
import TodoListItem from './assets/components/TodoListItem'
import TodoCounter from './assets/components/TodoCounter'
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
						<ul className="todolist">
							{unfinishedTodos.map((todo, index) => (
								<TodoListItem
									onToggle={toggleTodo}
									onDelete={deleteTodo}
									todo={todo}
									key={index}
								/>
							) )}
						</ul>

						<ul className="todolist">
							{finishedTodos.map((todo, index) => (
								<TodoListItem
									onToggle={toggleTodo}
									onDelete={deleteTodo}
									todo={todo}
									key={index}
								/>
							) )}
						</ul>

						<TodoCounter finished={finishedTodos.length} total={todos.length} />
					</>
				)}
			{todos.length === 0 && (<p className='text text-danger'>Empty todos, pls create moar!</p>)}

		</div>
		)
	}

	export default App

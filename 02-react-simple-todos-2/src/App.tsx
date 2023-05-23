import React, { useEffect, useState } from 'react'
import { Todo, Todos } from './types'
import TodoListItem from './components/TodoListItem'
import TodoCounter from './components/TodoCounter'
import AddNewTodoForm from './components/AddNewTodoForm'
import TodoList from './components/TodoList'
import * as TodosAPI from './services/TodosAPI'
import './App.css'

function App() {
	const [todos, setTodos] = useState<Todos>([])

	// Get todos from api
	const getTodos = async () => {
		const data = await TodosAPI.getTodos()
		setTodos(data)
	}

	// Create a new todo in the API
	const addTodo = async (todo: Todo) => {
		await TodosAPI.createTodos(todo)
		getTodos()

	}

	// Delete a todo in the api
	const deleteTodo = async (todo: Todo) => {
		if (!todo.id) {
			return
		}

		// Delete todo from the api
		await TodosAPI.deleteTodos(todo.id!)
		await TodosAPI.deleteTodos(todo.id)

		// Get all the todos from the api
		getTodos()


	}

	const toggleTodo = async (todo: Todo) => {
		if (!todo.id) {
			return
		}

		// Update a todo in the api
		await TodosAPI.updateTodo(todo.id, {
			completed: !todo.completed
		})


		// Get all the todos from the api
		getTodos()
	}

	// fetch todos when App is being mounted
	useEffect(() => {
		getTodos()
	}, [])

	const unfinishedTodos = todos.filter(todo => !todo.completed)
	const finishedTodos = todos.filter(todo => todo.completed)

	// console.log("App rendering...")

	return (
		<div className='App'>
			<h1>React Todo</h1>

			<AddNewTodoForm onAddTodo={addTodo} />

			<hr />
			{todos.length > 0 && (
					<>

					<TodoList
						onToggle={toggleTodo}
						onDelete={deleteTodo}
						todos={unfinishedTodos}
					/>

					<TodoList
						onToggle={toggleTodo}
						onDelete={deleteTodo}
						todos={finishedTodos}
					/>

						<TodoCounter finished={finishedTodos.length} total={todos.length} />
					</>
				)}
			{todos.length === 0 && (<p className='text text-danger'>Empty todos, pls create moar!</p>)}

		</div>
		)
	}

	export default App

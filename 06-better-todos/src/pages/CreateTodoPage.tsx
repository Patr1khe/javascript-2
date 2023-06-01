import { useState } from 'react'
import { Todo } from '../types'
import { Alert } from 'react-bootstrap'
import AddNewTodoForm from '../components/AddNewTodoForm'
import * as TodosAPI from '../services/TodosAPI'

const CreateTodoPage = () => {
	const [success, setSuccess] = useState<boolean|null>(null)

	// Create a new todo in the API
	const addTodo = async (todo: Todo) => {
		try {
			const createdTodo = await TodosAPI.createTodo(todo)

			setSuccess(!!true)


		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			setSuccess(false)

		}

		// check result and set success accordingly

	}

	return (
		<>
			<h1 className="mb-3">Create a new Todo</h1>

			<AddNewTodoForm onAddTodo={addTodo} />

			{success === false && (
				<Alert variant="warning" className="mt-3">Todo could not be created 😵</Alert>
			)}
		</>
	)
}

export default CreateTodoPage

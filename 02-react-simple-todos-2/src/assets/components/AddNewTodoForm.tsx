import React, {useState} from 'react'
import { Todo } from '../types'

interface IProps {
	onAddTodo: (todo: Todo) => void
}

const AddNewTodoForm: React.FC<IProps> = ({onAddTodo}) => {
	const [newTodoTitle, setNewTodoTitle] = useState("")

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		const newTodo: Todo = {
			title: newTodoTitle,
			completed: false,
		}

		onAddTodo(newTodo)

		setNewTodoTitle("")
	}

  return (
	<form onSubmit={handleSubmit} className="mb-3">
		<div className="input-group mb-3">
			<input
			type="text"
			className="form-control"
			placeholder='Create Todo'
			onChange={e => setNewTodoTitle(e.target.value)}
			value={newTodoTitle}
			required
			/>
			<button
				disabled={!newTodoTitle.trim()}
				type='submit'
				className="btn btn-success mb"

			>Create</button>
		</div>
	</form>
  )
}

export default AddNewTodoForm

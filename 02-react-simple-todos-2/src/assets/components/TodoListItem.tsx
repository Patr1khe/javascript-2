import React from 'react'
import {Todo} from '../types/index'

interface IProps {
	todo: Todo
	onDelete: (todoToDelete: Todo) => void
	onToggle: (todo: Todo) => void
}

const TodoListItem: React.FC<IProps> = ({ todo, onToggle }) => {


	return (
		<li className={todo.completed ? 'done' : ''}>
			<span className="todo-title">
				{todo.title}
			</span>

			<span className="ms-1">
				<span className="todo-toggle" onClick={() => onToggle(todo)} role="button">
					{todo.completed ? '☑️' : '✅'}
				</span>
				{/* <span className="todo-delete" onClick={() => deleteTodo(todo)} role="button">
					🗑️
				</span> */}
			</span>
		</li>
	)
}

export default TodoListItem

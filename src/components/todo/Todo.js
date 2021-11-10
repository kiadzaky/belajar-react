import './Todo.css';
import { useState } from 'react';
import Todolist from '../todo-list/Todolist';
import Todocreate from '../todo-create/Todocreate';
const Todo = () => {
	const [getTodos, setTodos] = useState([
		{ id: '1', title: 'Learn21' },
		{ id: '2', title: 'Learn22' },
		{ id: '3', title: 'Learn23' },
	]);
	const eventCreateTodo = (todo) => {
		setTodos(getTodos.concat(todo));
		console.log(getTodos);
	};
	return (
		<div>
			<h3>Todo List</h3>
			<Todocreate onCreateTodo={eventCreateTodo} />
			<Todolist dataTodos={getTodos} />
		</div>
	);
};

export default Todo;

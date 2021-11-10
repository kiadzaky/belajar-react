import './Todocreate.css';
import { useState } from 'react';
const Todocreate = (props) => {
	const [getInputTodo, setInputTodo] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		// console.log(getInputTodo);
		if (getInputTodo === '') {
			console.log('Kosong');
		} else {
			const newTodo = {
				id: Math.floor(Math.random() * 100) + 1,
				title: getInputTodo,
			};
			props.onCreateTodo(newTodo);
			setInputTodo('');
		}
	};

	const inputTodo = (event) => {
		setInputTodo(event.target.value);
		// console.log(getInputTodo);
	};
	return (
		<form className="todo-form" onSubmit={handleSubmit}>
			<input type="text" value={getInputTodo} onChange={inputTodo}></input>
			<button type="submit"> TAMBAH </button>
		</form>
	);
};

export default Todocreate;

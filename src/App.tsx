import React, { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import Todo from './models/todo'

function App() {	
	const [todos, setTodos] = useState<Todo[]>([]);

	const AddTodoHandler = (text: string) => setTodos(prev => [...prev, new Todo(text)]);

	return (
		<div className="">
			<AddTodo onAddTodo={AddTodoHandler} />
			<Todos items={todos} />
		</div>
	);
}

export default App;

import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import TodosContextProvider from './store/todos-context';

function App() {	
	return (
		<TodosContextProvider>
			<AddTodo />
			<Todos />
		</TodosContextProvider>
	);
}

export default App;

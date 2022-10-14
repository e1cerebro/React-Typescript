import React, {createContext, useState} from 'react';
import Todo from '../models/todo';

type TodosContextProps = {
	items: Todo[],
	addTodo: (text: string) => void,
	removeTodo: (id: string) => void
}

export const TodosContext = createContext<TodosContextProps>({
	items: [],
	addTodo: (text: string) => {},
	removeTodo: (id: string) => {}
});

type TodosContextProviderProps = {
	children?: React.ReactNode
}

const TodosContextProvider:React.FC<TodosContextProviderProps> = (props) => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const addTodoHandler = (text: string) => setTodos(prevTodos => [...prevTodos, new Todo(text)]);
	const removeTodoHandler = (id: string) => setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id) );

	const contextValue: TodosContextProps = {
		items: todos,
		addTodo: addTodoHandler,
		removeTodo: removeTodoHandler
	}

	return (
		<TodosContext.Provider value={contextValue}>
			{props.children}
		</TodosContext.Provider>
	);
}

export default TodosContextProvider;
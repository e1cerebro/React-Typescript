import React, {useRef, useContext} from "react";
import { TodosContext } from "../store/todos-context";

type AddTodoProps = {
	
}

const AddTodo:React.FC<AddTodoProps> = (props) => {
	const todosCtx = useContext(TodosContext);

	const todoInputText = useRef<HTMLInputElement>(null);

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		const todoText = todoInputText.current!.value;

		if(todoText?.trim().length === 0) return;

		todosCtx.addTodo(todoText);
	};

	return (
		<form onSubmit={submitHandler}>
			<label htmlFor="todo-text">Todo Text</label>
			<input type="text" id="todo-text" ref={todoInputText}/>
			<button type="submit">Add Todo</button>
		</form>
	);
}
 
 
export default AddTodo;
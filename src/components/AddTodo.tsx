import React, {useRef} from "react";

type AddTodoProps = {
	onAddTodo: (text: string) => void
}

const AddTodo:React.FC<AddTodoProps> = (props) => {
	const todoInputText = useRef<HTMLInputElement>(null);

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		const todoText = todoInputText.current!.value;

		if(todoText?.trim().length === 0) return;

		props.onAddTodo(todoText);
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
import Todo from "../models/todo";

type TodoItemProps = {
	item: Todo,
	children?: React.ReactNode
}

const TodoItem:React.FC<TodoItemProps> = (props) => {
	return (
		<li>{props.item.text}</li>
	);
}

export default TodoItem;
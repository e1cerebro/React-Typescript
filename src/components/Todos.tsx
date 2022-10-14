import React, {useContext} from 'react';
import { TodosContext } from '../store/todos-context';
import TodoItem from './TodoItem';

type TodoProps = {
	children?: React.ReactNode
}

const Todos: React.FC<TodoProps> = (props) => {
	const todosCtx = useContext(TodosContext);

	return (
		<ul>
			{ todosCtx.items.map((item, index) => (
				<TodoItem key={index} item={item} />
			))}
		</ul>
	);
}

export default Todos;
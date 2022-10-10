import React from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';

type TodoProps = {
	items: Todo[],
	children?: React.ReactNode
}

const Todos: React.FC<TodoProps> = (props) => {
	return (
		<ul>
			{ props.items.map((item, index) => (
				<TodoItem key={item.id} item={item} />
			))}
		</ul>
	);
}

export default Todos;
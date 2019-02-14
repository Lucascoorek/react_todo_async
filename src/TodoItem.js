import React from 'react';

const TodoItem = ({ name, completed,onDelete,onToggle,_id}) => (
		<li>
		<span 
		style={{
			textDecoration: completed ? 'line-through': 'none'
		}}
		onClick={onToggle}>
		{name}
		</span>
		<span onClick={() => onDelete(_id)}> X </span>
		</li>
	);
	

export default TodoItem;
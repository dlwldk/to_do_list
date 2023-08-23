import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({todos, onCheckToggle, onInsertToggle, onChangeSeletedTodo}) => {
    return (<div className="TodoList">
        {todos.map(todo => (
        <TodoItem 
            todo={todo} 
            key={todo.id} 
            onCheckToggle={onCheckToggle} 
            onInsertToggle={onInsertToggle}
            onChangeSeletedTodo={onChangeSeletedTodo}
        />
        ))}
    </div>
    );


}

export default TodoList;
import React, { useState } from 'react';
import "./App.css";
import Template from './components/Template';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';
import { MdAddCircle } from "react-icons/md";


const App = () => {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);

  const [todos, setTodos] = useState([
     {
      id: 1,
      text: "점심 먹기",
      checked: true
     },
     {
      id: 2,
      text: "회의 하기",
      checked: false
     },
     {
      id: 3,
      text: "영양제 먹기",
      checked: true
     }
  ]);

  let nextId = todos.length + 1;

  const onInsertToggle = () => {
    if(selectedTodo) {
      setSelectedTodo(null);
    }
    setInsertToggle(prev => !prev);
  }

  const onInsertTodo = (text) => {
    if(text.trim().length === 0) {
      return alert("할 일을 입력해주세요.")
    }

    const todo = {
      id: nextId,
      text,
      checked: false
    }

    setTodos(todos => todos.concat(todo));
    //push 안쓴 이유는 전 배열 자체가 변경되기 때문
    nextId++;
  }
  const onCheckToggle = (id) => {
    setTodos(todos => 
      todos.map(todo => (todo.id === id ? {...todo, checked: !todo.checked} : todo
        )
      )
    );
  }

  const onChangeSeletedTodo = (todo) => {
    setSelectedTodo(todo);
  }

  const onRemove = (id) => {
    onInsertToggle();
    setTodos(todos => todos.filter(todo => todo.id !== id));

  } 

  const onUpdate = (id, text) => {
    onInsertToggle();
    setTodos(todos => 
      todos.map(todo => todo.id === id ? {...todo, text} : todo
    ))
  }

  return <Template todoLength={todos.length}>
      <TodoList 
        todos={todos} 
        onCheckToggle={onCheckToggle} 
        onInsertToggle={onInsertToggle}
        onChangeSeletedTodo={onChangeSeletedTodo}
        />
      <div className="add-todo-button" onClick={onInsertToggle}>
        <MdAddCircle />
      </div>
      {insertToggle && 
      <TodoInsert 
        selectedTodo={selectedTodo}
        onInsertToggle={onInsertToggle} 
        onInsertTodo={onInsertTodo}
        onRemove={onRemove}
        onUpdate={onUpdate}
      />}
    </Template>

}

export default App;

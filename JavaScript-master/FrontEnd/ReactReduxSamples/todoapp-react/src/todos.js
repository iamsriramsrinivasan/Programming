import React from "react";

const todos = ({ todos, deleteTodo }) => {
  const todosList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            {todo.content}
          </span>
        </div>
      );
    })
  ) : (
    <p className="center"> You have nothing to do now!</p>
  );
  return <div className="todos collections">{todosList}</div>;
};

export default todos;

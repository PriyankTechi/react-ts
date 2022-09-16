import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import TodosContext from "../store/todo-context";

const Todos: React.FC = () => {
  const todoCxt = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todoCxt.items.map((item) => (
        <TodoItem
          onRemoveTodo={todoCxt.removeTodo.bind(null, item.id)}
          key={item.id}
          id={item.id}
          text={item.text}
        />
      ))}
    </ul>
  );
};

export default Todos;

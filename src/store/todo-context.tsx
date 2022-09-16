import React, { useState, PropsWithChildren } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (textTodo: string) => void;
  removeTodo: (id: string) => void;
};

const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: (textTodo: string) => {},
  removeTodo: (id: string) => {},
});

export const TodoContextProvider: React.FC<PropsWithChildren> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (textTodo: string) => {
    const newTodo = new Todo(textTodo);

    setTodos((prevState) => prevState.concat(newTodo));
  };

  const removeTodoHandler = (id: string) => {
    setTodos((prevState) => prevState.filter((item) => item.id !== id));
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContext;

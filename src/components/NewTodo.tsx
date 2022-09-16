import { useRef, useContext } from "react";
import classes from "./NewTodo.module.css";
import TodosContext from "../store/todo-context";

const NewTodo: React.FC = () => {
  const todosCxt = useContext(TodosContext);

  const inputTodo = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enterText = inputTodo.current!.value;
    if (enterText.trim().length === 0) {
      return;
    }
    todosCxt.addTodo(enterText);
    inputTodo.current!.value = "";
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={inputTodo} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;

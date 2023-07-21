import React, { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

// The 'NewTodo' component provides a form to add new Todo items.
const NewTodo: React.FC = () => {
  // Get the TodosContext using the 'useContext' hook to access Todo handlers.
  const todosCtx = useContext(TodosContext);

  // Create a reference to the input element using 'useRef'.
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  // Handle form submission to add a new Todo item.
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // Get the entered text from the input element.
    const enteredText = todoTextInputRef.current!.value;

    // Check if the entered text is empty and handle the error.
    if (enteredText.trim().length === 0) {
      // throw an error or show a message to the user.
      return;
    }

    // Call the 'addTodo' handler from the TodosContext to add the new Todo item.
    todosCtx.addTodo(enteredText);
  };

  return (
    // Render a form with a label, input, and button to add new Todo items.
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      {/* Bind the input element to the 'todoTextInputRef' using 'ref'. */}
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;

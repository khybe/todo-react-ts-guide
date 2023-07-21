import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";
import classes from "./Todos.module.css";

// The 'Todos' component responsible for rendering the list of Todo items.
const Todos: React.FC = () => {
  // Get the TodosContext using the 'useContext' hook to access Todo items and handlers.
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {/* Map through each Todo item in the context and render a TodoItem component for each one. */}
      {todosCtx.items.map((item) => (
        // Render the TodoItem component with the 'text' and 'onRemoveTodo' props.
        <TodoItem
          key={item.id} // Use the unique 'id' as the key for efficient rendering.
          text={item.text} // Pass the 'text' of the Todo item to the TodoItem component.
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} // Bind the 'removeTodo' handler to the TodoItem component.
        />
      ))}
    </ul>
  );
};

export default Todos;

import React from "react";
import classes from "./TodoItem.module.css";

// The 'TodoItem' component represents a single Todo item in the list.
const TodoItem: React.FC<{ text: string; onRemoveTodo: () => void }> = (
  props
) => {
  return (
    // Render a list item with the Todo text and attach the 'onRemoveTodo' handler to the 'onClick' event.
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};

export default TodoItem;

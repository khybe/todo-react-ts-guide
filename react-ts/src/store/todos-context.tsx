import React, { useState, ReactNode } from "react";
import Todo from "../models/todo";

// Define the shape of the TodosContext object, specifying the properties and their types.
type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

// Define the Props type for the TodosContextProvider component, expecting 'children' as ReactNode.
type Props = { children: ReactNode };

// Create a new React context for managing Todo items.
export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

// Define the TodosContextProvider component using the React functional component pattern.
const TodosContextProvider: React.FC<Props> = ({ children }) => {
  // State to hold the list of Todo items using the 'Todo' model.
  const [todos, setTodos] = useState<Todo[]>([]);

  // Function to add a new Todo item to the list.
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  // Function to remove a Todo item from the list based on its ID.
  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  // Create the context value, containing the list of Todo items and the addTodo & removeTodo handlers.
  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  // Provide the context value to the children components through the TodosContext.Provider.
  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;

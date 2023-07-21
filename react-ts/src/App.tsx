import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todos-context";

// The root component of the Todo app.
function App() {
  return (
    // Wrap the components with the TodosContextProvider to provide Todo data throughout the app.
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;

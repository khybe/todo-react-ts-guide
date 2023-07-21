// Define the Todo model class to represent a single Todo item.
class Todo {
  // Properties of the Todo item: id (string) and text (string).
  id: string;
  text: string;

  // Constructor to initialize the Todo item with a 'todoText' and generate a unique 'id'.
  constructor(todoText: string) {
    // Set the 'text' property of the Todo item.
    this.text = todoText;

    // Generate a unique 'id' for the Todo item based on the current timestamp.
    this.id = new Date().toISOString();
  }
}

// Export the Todo model class to be used in other parts of the application.
export default Todo;

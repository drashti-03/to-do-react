import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItems from "./components/ToDoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import TodoItemsContextProvider from "./store/todo-items-store";
TodoItemsContextProvider;

function App() {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <TodoItemsContextProvider>
      <center className="todo-container container">
        <AppName />
        <AddToDo></AddToDo>
        <WelcomeMessage></WelcomeMessage>
        <ToDoItems></ToDoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;

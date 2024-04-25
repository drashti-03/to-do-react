/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import ToDoItem from "./ToDoItem";
import styles from "./ToDoItems.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

const ToDoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <ToDoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
        ></ToDoItem>
      ))}
    </div>
  );
};

export default ToDoItems;

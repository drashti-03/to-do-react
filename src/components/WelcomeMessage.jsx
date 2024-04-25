import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

// eslint-disable-next-line react/prop-types
const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    // eslint-disable-next-line no-undef, react/prop-types
    todoItems.length === 0 && <p className={styles.welcome}>Enjoy Your Day</p>
  );
};

export default WelcomeMessage;

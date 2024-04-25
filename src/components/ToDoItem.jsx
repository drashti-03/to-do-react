/* eslint-disable react/prop-types */
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function ToDoItem({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);

  return (
    <>
      <div className="container">
        <div className="row my-1 items add">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger buttonn "
              onClick={() => deleteItem(todoName)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDoItem;

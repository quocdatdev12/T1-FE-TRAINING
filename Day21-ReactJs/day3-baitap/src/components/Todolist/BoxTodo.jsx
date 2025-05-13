import React from "react";

export const BoxTodo = (props) => {
  console.log(props,"listTodo");
  const { listTodo, handlRemoveTodo,onhandlDoneTodo } = props;
//   const handlDoneTodo = (id) => {
//     onhandlDoneTodo(id);
//   }

  const handlRemove = (id) => {
    // console.log(id);
    handlRemoveTodo(id);
    
  }


  return (
    <div>
      {listTodo.map((todo) => (
        <div
          key={todo.id}
          className="flex p-2 mt-3 bg-white rounded gap-5 items-center justify-between "
        >
          <span className={todo.status ? "" : " line-through "}>
            {todo.title}
          </span>
          <div className="flex gap-2 items-center">
            <button
              onClick={() => onhandlDoneTodo(todo.id)}
              className=" border rounded p-1 cursor-pointer "
            >
              {" "}
              {!todo.status ? "Not Done" : "Done"}{" "}
            </button>
            <button
              onClick={() => handlRemove(todo.id)}
              className=" border rounded p-1 cursor-pointer "
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

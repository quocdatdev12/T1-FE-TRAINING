import React from "react";
import { useState } from "react";
import { BoxTodo } from "./BoxTodo";

export const FormDataTodo = () => {
  const [listTodo, setListTodo] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    status: true,
    title: "",
  });

  const handlChange = (e) => {
    const title = e.target.value;
    setFormData({
      ...formData,
      title,
    });
  };
  // console.log(formData,"formData");
  const handlSubmit = () => {
    const item = { ...formData, id: Date.now() };
    setListTodo([...listTodo, item]);
    setFormData({
      id: null,
      status: true,
      title: "",
    });
  };
  console.log(listTodo, "listTodo");
  const handleDoneTodo = (id) => {
    const updateTodos = listTodo.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          status: !todo.status,
        };
      }
      return todo;
    });
    setListTodo(updateTodos);
  };

  const handleRemoveTodo = (id) => {
    const updateListTodo = listTodo.filter(todo => todo.id !== id);
    setListTodo(updateListTodo);
  }

  return (
    <div className="bg-[#e4e0e0] h-full w-[300px] m-auto p-4 mt-5 rounded-lg ">
      <div className="flex gap-3 ">
        <input
          onChange={handlChange}
          className=" border pl-2 bg-white rounded "
          type="text"
          placeholder="Add Todo"
          value={formData.title}
        />
        <button
          disabled={!formData.title}
          className={`border rounded  px-2 ${
            formData.title
              ? " cursor-pointer bg-blue-600 text-white "
              : " cursor-text "
          }`}
          onClick={handlSubmit}
        >
          Add
        </button>
      </div>

      <div>
        <BoxTodo
          listTodo={listTodo}
          handlRemoveTodo={(id) => handleRemoveTodo(id)}
          onhandlDoneTodo={(id) => handleDoneTodo(id)}
        />
      </div>
    </div>
  );
};

/*
Author: chankruze (chankruze@gmail.com)
Created: Mon May 23 2022 23:46:39 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import React, { FormHTMLAttributes, useState } from "react";
import { nanoid } from "nanoid";
import useTodoStore from "../app/todoStore";

const TodoForm = () => {
  const addTodo = useTodoStore((state) => state.addTodo);

  const [todoTitle, setTodoTitle] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!todoTitle) {
      alert("Please enter a task!");
      return;
    }

    // add to-do action (mutate state)
    addTodo({ id: nanoid(), title: todoTitle, completed: false });

    // reset the field
    setTodoTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex gap-2 flex-wrap">
      <input
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
        placeholder="Add a new task!"
        className="flex-1 p-3 rounded-md border-2 focus:outline-blue-400"
      />
      <button
        type="submit"
        className="w-full sm:w-auto p-3 rounded-md text-white bg-blue-500 hover:bg-blue-500/80"
      >
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;

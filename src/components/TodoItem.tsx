/*
Author: chankruze (chankruze@gmail.com)
Created: Mon May 23 2022 23:50:23 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import useTodoStore from "../app/todoStore";
import { Todo } from "../types";

interface TodoItemProps {
  data: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ data }) => {
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  // const courses = useTodoStore((state) => state.courses);

  return (
    <div
      className={`w-full flex items-center justify-between p-3 rounded-md bg-white
      ${data.completed && "opacity-25"}
      border-2
      `}
    >
      <p className={`ml-2 ${data.completed && "line-through"}`}>{data.title}</p>
      <input
        type="checkbox"
        name={data.id}
        id={data.id}
        checked={data.completed}
        onChange={() => toggleTodo(data.id)}
        className="h-5 w-5"
      />
    </div>
  );
};

export default TodoItem;

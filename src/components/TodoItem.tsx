/*
Author: chankruze (chankruze@gmail.com)
Created: Mon May 23 2022 23:50:23 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { useRef, useState } from "react";
import useTodoStore from "../app/todoStore";
import { MdDelete, MdEdit } from "react-icons/md";
import { Todo } from "../types";
import ActionButton from "./ActionButton";

interface TodoItemProps {
  data: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ data }) => {
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);
  const updateTodo = useTodoStore((state) => state.updateToDo);
  // const courses = useTodoStore((state) => state.courses);
  const [editing, setEditing] = useState(false);
  const [dirtyTitle, setDirtyTitle] = useState(data.title);

  const toggleEdit = () => {
    if (!data.completed) {
      setEditing((prev) => !prev);
    }
  };

  const saveEdit = () => {
    if (dirtyTitle && dirtyTitle !== data.title) {
      updateTodo(data.id, dirtyTitle);
    }
    setEditing(false);
  };

  const cancelEdit = () => {
    setDirtyTitle(data.title);
    setEditing(false);
  };

  const toogleCompleted = () => {
    setEditing(false);
    toggleTodo(data.id);
  };

  return (
    <div className="w-ful rounded-md bg-white border-2">
      {/* header (toolbar) */}
      <div className="p-2 flex items-center justify-between gap-1 border-b">
        {/* checkbox */}
        <div className="flex items-center gap-1">
          <input
            type="checkbox"
            name={data.id}
            id={data.id}
            checked={data.completed}
            onChange={toogleCompleted}
            className="h-5 w-5"
          />
          <label
            htmlFor={data.id}
            className="text-xs uppercase text-gray-400 font-medium"
          >
            Mark as completed
          </label>
        </div>
        {/* action buttons */}
        <div className="flex items-center gap-1">
          {!editing && (
            <>
              <ActionButton
                action="delete"
                onClick={() => removeTodo(data.id)}
              />
            </>
          )}
          {!data.completed &&
            (editing ? (
              <>
                <ActionButton action="save" onClick={saveEdit} />
                <ActionButton action="cancel" onClick={cancelEdit} />
              </>
            ) : (
              <ActionButton action="edit" onClick={toggleEdit} />
            ))}
        </div>
      </div>
      {/* content */}
      <div className={`p-2 ${data.completed && "opacity-25"}`}>
        {/* title */}
        {editing ? (
          <textarea
            value={dirtyTitle}
            onChange={(e) => setDirtyTitle(e.target.value)}
            className="w-full p-2 rounded-md border-2 focus:outline-none focus:border-blue-400"
          />
        ) : (
          <p className="break-words text-lg">{data.title}</p>
        )}
      </div>
    </div>
  );
};

export default TodoItem;

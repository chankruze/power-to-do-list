/*
Author: chankruze (chankruze@gmail.com)
Created: Mon May 23 2022 23:14:15 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Todo } from "../types";

// store schema
const todoStore = (set) => ({
  // to-do list
  todos: [] as Todo[],

  // add a to-do item
  addTodo: (todo: Todo) => set((state) => ({ todos: [todo, ...state.todos] })),

  // remove a to-do item
  removeTodo: (todoId: string) =>
    set((state) => ({
      todos: state.todos.filter((todo: Todo) => todo.id !== todoId),
    })),

  // toggle a to-do item
  toggleTodo: (todoId: string) =>
    set((state) => ({
      todos: state.todos.map((todo: Todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
});

// create the store
const useTodoStore = create(
  devtools(
    persist(todoStore, {
      name: "simple-to-do",
    })
  )
);

export default useTodoStore;

/*
Author: chankruze (chankruze@gmail.com)
Created: Mon May 23 2022 23:14:15 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { SetStateAction } from "react";
import create, { SetState, State, StateCreator, StateSelector } from "zustand";
import {
  devtools,
  persist,
  PersistOptions,
  StateStorage,
} from "zustand/middleware";
import { Todo } from "../types";

interface TodoStoreState {
  todos: Todo[];
  addTodo: (description: string) => void;
  removeTodo: (id: string) => void;
  toggleCompletedState: (id: string) => void;
}

// store schema
const todoStore = (set: any) => ({
  // to-do list
  todos: [],

  // add a to-do item
  addTodo: (todo: Todo) =>
    set((state: TodoStoreState) => ({ todos: [todo, ...state.todos] })),

  // remove a to-do item
  removeTodo: (todoId: string) =>
    set((state: TodoStoreState) => ({
      todos: state.todos.filter((todo: Todo) => todo.id !== todoId),
    })),

  // toggle a to-do item
  toggleTodo: (todoId: string) =>
    set((state: TodoStoreState) => ({
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

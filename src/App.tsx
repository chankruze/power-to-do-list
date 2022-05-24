import TodoForm from "./components/TodoForm";
import useTodoStore from "./app/todoStore";
import { Todo } from "./types";
import TodoItem from "./components/TodoItem";

function App() {
  const todos = useTodoStore((state) => state.todos).sort(
    (t1: Todo, t2: Todo) => (t1.completed ? 1 : -1)
  );

  return (
    <div className="bg-gray-100 min-h-screen p-2">
      <div className="w-full md:max-w-md m-auto">
        <TodoForm />
        <div className="mt-4 flex flex-col gap-1 w-full">
          {todos.map((todo: Todo) => (
            <TodoItem key={todo.id} data={todo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

"use client";

import { useTodoStore } from "@/lib/store";
import { useState } from "react";

export default function Home() {
  const {todos, addTodo, toggleTodo, deleteTodo} = useTodoStore();
  const [input, setInput] = useState("");

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do App</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 flex-1"
          placeholder="Add a new task..."></input>
        <button
          onClick={() => {
            if(input.trim()) addTodo(input);
            setInput("");
          }}
          className="bg-blue-500 text-white p-2"></button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleTodo(todo.id)}
              className="h-5 w-5"></input>
              <span className={todo.done ? "line-through" : ""}>{todo.text}</span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500 m1-auto">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
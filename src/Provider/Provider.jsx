"use client";
import React, { createContext, useState } from "react";
import { useRouter } from "next/navigation";
import { creator, deleter} from "@/app/lib/feth";

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const router = useRouter();
  const [todo, setTodo] = useState("");
  // const [status, setStatus] = useState("todo")
  const [filter, setFilter] = useState("all");

  const createTodo = async () => {
    const res = await creator({ text: todo });
    router.refresh();
  };

  const addButton = () => {
    createTodo();
    setTodo("");
  };

  const clearAllTasks = async (x) => {
    x.forEach(async (i) => {
      const res = await deleter(i.id);
    })
    window.location.reload();
  };

  return (
    <NoteContext.Provider
      value={{ todo, filter, setFilter, setTodo, addButton, clearAllTasks }}
    >
      {children}
    </NoteContext.Provider>
  );
};

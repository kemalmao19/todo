"use client"
import React, { createContext, useState } from 'react'
import { useRouter } from 'next/navigation'
import { API_URL } from '@/config';

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const router = useRouter();
  const [todo, setTodo] = useState("")
  const [status, setStatus] = useState("todo")
  const [filter, setFilter] = useState("all")

  const createTodo = async () => {
    const res = await fetch(`${API_URL}`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({content:todo, user:"kemal@mock.com", additionalData:status})
    })
    router.refresh()
  }

  const addButton = () => {
      createTodo();
      setTodo('');
  }

  const clearAllTasks = (list) => {
    list.map(async(i)=>{
        const res = await fetch(`${API_URL}`+ "/" +i.id, {
            method: "DELETE",
          })
          router.refresh()
    })
  }

  return (
    <NoteContext.Provider
      value={{todo, status, filter, setFilter, setTodo, addButton,  clearAllTasks }}
    >
      {children}
    </NoteContext.Provider>
  );
};

"use client"
import React, { createContext, useState } from 'react'
import { useRouter } from 'next/navigation'

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
    const router = useRouter();

  const clearAllTasks = (list) => {
    list.map(async(i)=>{
        const res = await fetch("https://devscale-mockapi.fly.dev/api/collections/notes/records/"+i.id, {
            method: "DELETE",
          })
          router.refresh()
    })
  }

  return (
    <NoteContext.Provider
      value={{ clearAllTasks }}
    >
      {children}
    </NoteContext.Provider>
  );
};

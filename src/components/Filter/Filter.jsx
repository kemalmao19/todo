import React from 'react'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export const Filter = ({content}) => {
    const router = useRouter()
    const [todo, setTodo] = useState(content.content)
    const [isDone, setDone] = useState(content.additionalData)
    const [filter, setFilter] = useState("all")

    const filterTodos = () => {
        switch (filter) {
          case "all": return todo;
          case "active": return todo.filter(todo => todo.additionalData === "todo");
          case "completed": return todo.filter(todo => todo.additionalData === "done");
          default: return todo;
        }
      };

  return (
    <div>Filter</div>
  )
}

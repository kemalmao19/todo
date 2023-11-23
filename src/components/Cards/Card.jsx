"use client"
import React, { useState } from 'react'

export const Card = ({content, status, date, index}) => {
  const [todo, setTodo] = useState(content)
  const [isDone, setDone] = useState(status)
  const [dated, setDate] = useState(date)

  return (
    <div id="container-task" className="mt-10 bg-slate-700 rounded-t-lg">
        {/* {todoList.map(())} */}
    </div>
  )
}

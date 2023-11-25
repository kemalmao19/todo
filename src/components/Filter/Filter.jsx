"use client"
import React, { useContext } from 'react'
import { NoteContext } from '@/Provider/Provider'

export const Filter = () => {
    const {filter, setFilter} = useContext(NoteContext)

    const changeFilter = (x) => {
        setFilter(x)
        // router.refresh()
    }

  return (
    <div className='mt-10 flex justify-center items-center gap-5 p-3 text-grayCustom bg-lightBlue rounded-xl'>
        <button
            onClick={()=>changeFilter("all")} 
            style={{color: filter === "all" ? "violet": ""}}>All</button>
        <button 
            onClick={()=>changeFilter("active")} 
            style={{color: filter === "active" ? "violet": ""}}>Active</button>
        <button 
            onClick={()=>changeFilter("completed")} 
            style={{color: filter === "completed" ? "violet": ""}}>Completed</button>
    </div>
  )
}

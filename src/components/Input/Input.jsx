"use client"
import React, { useState } from 'react'
import Image from 'next/image'

const nameInput = "Create a new todo.."

export const Input = () => {
    const [todo, setTodo] = useState("")
    const [status, setStatus] = useState(false)
    const [date, setDate] = useState("")

    async function createTodo() {
        const res = await fetch("https://v1.appbackend.io/v1/rows/YQzghSYuXLlt", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify([{"name":todo,"isdone":status,"date":date}])
        })
        const data = await res.json()
        // console.log(data)
        return data
    }

    const addButton = () => {
        const d = new Date();
        const year = d.getFullYear()
        const month = d.getMonth()
        const day = d.getDate()
        const currentDate = `${year}-${month}-${day}`
        setDate(currentDate);
        createTodo();
        setTodo('');
    }

  return (
    <div>
        <div className="flex justify-start items-center gap-5 mt-10 py-3 px-5 bg-lightBlue rounded-xl">
            <input 
                type_="text" 
                className="text-white w-full bg-transparent focus:outline-none" 
                placeholder={nameInput} 
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
            />
            <div 
                onClick={()=> addButton()} 
                className="cursor-pointer"
            >
                <Image src="/addbtn.svg" width={30.0} height={30.0} alt={"add-button"} className=''/>
            </div>
        </div>
    </div>
  )
}

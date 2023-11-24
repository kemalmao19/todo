"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const nameInput = "Create a new todo.."

export const Input = () => {
    const router = useRouter();
    const [todo, setTodo] = useState("")
    const [status, setStatus] = useState("todo")

    async function createTodo() {
        const res = await fetch("https://devscale-mockapi.fly.dev/api/collections/notes/records", {
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

  return (
    <div>
        <div className="flex justify-start items-center gap-5 mt-10 py-3 px-5 bg-lightBlue rounded-xl">
            <input 
                type_="text" 
                id='input'
                className="text-white w-full bg-transparent focus:outline-none" 
                placeholder={nameInput} 
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
            />
            <div 
                onClick={todo.length > 0 ? ()=> addButton() : ()=>null} 
                className="cursor-pointer"
            >
                <Image src={"/addbtn.svg"} width={30.0} height={30.0} alt={"add-button"} className=''/>
            </div>
        </div>
    </div>
  )
}

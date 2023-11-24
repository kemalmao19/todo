"use client"
import React, { useContext } from 'react'
import Image from 'next/image'
import { NoteContext } from '@/Provider/Provider'

const nameInput = "Create a new todo.."

export const Input = () => {

  const {todo, setTodo, addButton} = useContext(NoteContext);

  return (
    <div>
        <div className="flex justify-start items-center gap-5 mt-10 py-3 px-5 bg-lightBlue rounded-xl">
            <input 
                type_="text" 
                id='input'
                className="text-white w-full bg-transparent focus:outline-none" 
                placeholder={nameInput} 
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <div 
                onClick={todo.length > 0 ? ()=> addButton() : ()=>null} 
                className="cursor-pointer hover:bg-cyan-500 rounded-full"
            >
                <Image src={"/addBtn.svg"} width={30.0} height={30.0} alt={"add-button"} className=''/>
            </div>
        </div>
    </div>
  )
}

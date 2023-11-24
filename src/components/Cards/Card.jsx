"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export const Card = ({content, id, index}) => {
  const router = useRouter()
  const [todo, setTodo] = useState(content.content)
  const [isDone, setDone] = useState(content.additionalData)

  async function deleteButton() {
    const res = await fetch("https://devscale-mockapi.fly.dev/api/collections/notes/records/" + id, {
      method: "DELETE",
    })
    router.refresh()
  }

  const changeStatus = async () => {
    const newStatus = isDone === "todo" ? "done" : "todo";
    setDone(newStatus);
 
    const response = await fetch(`https://devscale-mockapi.fly.dev/api/collections/notes/records/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ additionalData: newStatus }),
    });
    router.refresh()
  }

  return (
    <div>
      <div id="container-task" className="">
          <div className="flex justify-start items-center gap-5 py-5 px-5 border-b-2 border-grayCustom">
            <div 
              className="cursor-pointer border-2 border-grayCustom hover:border-gray-300 p-3 rounded-full"
              onClick={()=>changeStatus()}
              style={{
                background: isDone  === "done" ? "rbg(70,227,255": "none",
                background: isDone === "done" ? "linear-gradient(146deg, rgba(70,227,255,1) 0%, rgba(251,0,255,1) 100%)": "none",
                }}>
            </div>

            <div 
              className="text-gray-300 font-comic w-full focus:outline-none"
              style={{
                textDecoration: isDone === "done" ? "line-through": "none",
                fontStyle: isDone === "done" ? "italic" : "none",
                }}>{todo}</div>
            <div className='cursor-pointer rounded-full hover:bg-red-200' onClick={deleteButton}>
              <Image src={"/delBtn.svg"} width={30.0} height={30.0} alt='delete'/>
            </div>
          </div>
      </div>
    </div>
  )
}

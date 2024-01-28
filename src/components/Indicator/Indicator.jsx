"use client"
import React, {useContext} from 'react'
import { NoteContext } from '@/Provider/Provider';

export const Indicator = ({content}) => {

  const { clearAllTasks } = useContext(NoteContext);

  const taskLeft = content.filter((i) => i.status === 'todo').length;

  return (
    <div className="flex justify-between items-center p-5 text-grayCustom font-comic">
        <div>{taskLeft} Task left</div>
        <div className='cursor-pointer hover:text-rose-300' onClick={()=>clearAllTasks(content)}>Clear All</div>
    </div>
  )
}

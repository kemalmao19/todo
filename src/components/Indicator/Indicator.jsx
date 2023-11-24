"use client"
import React, {useContext} from 'react'
import { NoteContext } from '@/Provider/Provider';
import { useRouter } from 'next/navigation';

export const Indicator = ({content}) => {
  const router = useRouter();
  const { clearAllTasks } = useContext(NoteContext);

  const taskLeft = content.filter((i) => i.additionalData === 'todo').length;

  return (
    <div className="flex justify-between items-center p-5 text-grayCustom font-comic">
        <div>{taskLeft} Task left</div>
        <div className='cursor-pointer' onClick={()=>clearAllTasks(content)}>Clear All</div>
    </div>
  )
}

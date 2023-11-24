import React from 'react'
import Image from 'next/image'

const appName = "TODO"

export const Header = () => {
  return (
    <div className="flex justify-between items-center p-3">
        <div className="text-3xl text-white tracking-[14.4px] font-extrabold">{appName}</div>
        <div>
            <Image src="/icon.svg" width={30} height={30} alt={"light"}/>
        </div>
    </div>
  )
}

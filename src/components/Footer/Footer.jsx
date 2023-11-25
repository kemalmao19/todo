import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export const Footer = () => {
  return (
    <div className='mt-10 flex flex-col items-center gap-3'>
        <p className='text-cyan-400'>Love to hear any feedback ❤️</p>
        <div className='flex gap-3'>
            <Link href="https://github.com/kemalmao19"><Image src={"/github.svg"} width={20.0} height={20.0} alt='github'/></Link>
            <Link href="mailto:kemalsmy@gmail.com"><Image src={"/email.svg"} width={20.0} height={20.0} alt='email'/></Link>
            <Link href="https://twitter.com/"><Image src={"/twitter.svg"} width={20.0} height={20.0} alt='twitter'/></Link>
        </div>
    </div>
  )
}

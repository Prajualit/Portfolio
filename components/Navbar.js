'use client'
import React from 'react'
import logo from './assets/logo.png'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handlenavbar = () => {
        const hamburger = document.getElementById('hamburger')
        if (hamburger.style.top === '0vh') {
            hamburger.style.top = '-100vh'
            setIsMenuOpen(false)
        }
        else {
            hamburger.style.top = '0vh'
            setIsMenuOpen(true)
        }
        
    }
    const closemenu = () => {
        const hamburger = document.getElementById('hamburger')
        hamburger.style.top = '-100vh'
        setIsMenuOpen(false)
    }

return (
    <div className='flex flex-col justify-center items-center'>
        <div className='page-content flex w-full flex-col sm:flex-row justify-around items-center space-y-6 sm:space-y-0 sm:space-x-16 h-[7rem] z-50 bg-[#1B1F24] xl:shadow-none shadow-lg shadow-[#15151570] fixed top-0 py-4'>
            <Image className='invert' width={200} src={logo} alt="" />
            <ul className='text-[#F0F2F4] flex  text-xl transition-colors delay-0 duration-75 hover:text-[#8e9091]'>
                <Link href="#home" className='w-24 hidden xl:flex items-center justify-center  cursor-pointer transition-colors hover:text-[#F0F2F4]'>Home</Link>
                <Link href="#about" className='w-24 hidden xl:flex items-center justify-center  cursor-pointer transition-colors hover:text-[#F0F2F4]'>About</Link>
                <Link href="#skills" className='w-24 hidden xl:flex items-center justify-center  cursor-pointer transition-colors hover:text-[#F0F2F4]'>Skills</Link>
                <Link href="#portfolio" className='w-24 hidden xl:flex items-center justify-center  cursor-pointer transition-colors hover:text-[#F0F2F4]'>Portfolio</Link>
                <Link href="#contact" className='w-24 hidden xl:flex items-center justify-center cursor-pointer transition-colors hover:text-[#F0F2F4]'>Contact</Link>
                <li onClick={handlenavbar} className='w-24 flex items-center justify-center  cursor-pointer transition-transform hover:scale-110 xl:hidden'>
                    <svg className='transition-transform hover:scale-110' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#F0F2F4"} fill={"none"}>
                        <path d="M20 12L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20 5L4 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20 19L4 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </li>
            </ul>
        </div>
        {isMenuOpen && <div className='fixed inset-0 bg-black opacity-50 z-10 transition-all duration-300' onClick={closemenu}></div>}
        <div id='hamburger' className="shadow-xl transition-all duration-300 md:h-[20rem] py-6 md:py-0 w-8/12 z-20 flex xl:hidden justify-center items-center mt-[30vh] rounded-2xl bg-[#22272F] fixed top-[-100vh]">
            <ul className='text-[#F0F2F4] flex justify-around text-xl transition-colors delay-0 md:space-y-0 space-y-6 duration-75 hover:text-[#8e9091] md:flex-row flex-col'>
                <Link href="#home" className='w-24 xl:hidden flex items-center justify-center  cursor-pointer transition-colors hover:text-[#F0F2F4]'>Home</Link>
                <Link href="#about" className='w-24 xl:hidden flex items-center justify-center  cursor-pointer transition-colors hover:text-[#F0F2F4]'>About</Link>
                <Link href="#skills" className='w-24 xl:hidden flex items-center justify-center  cursor-pointer transition-colors hover:text-[#F0F2F4]'>Skills</Link>
                <Link href="#portfolio" className='w-24 xl:hidden flex items-center justify-center  cursor-pointer transition-colors hover:text-[#F0F2F4]'>Portfolio</Link>
                <Link href="#contact" className='w-24 xl:hidden flex items-center justify-center cursor-pointer transition-colors hover:text-[#F0F2F4]'>Contact</Link>
            </ul>
        </div>
    </div>

)
}

export default Navbar

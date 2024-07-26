'use client'
import React from 'react'
import logo from './assets/logo.png'
import Image from 'next/image'

const Navbar = () => {
    const handleAbout = () => {
        //scroll the page to the about section
        window.scrollTo({
            top: 940,
            behavior: 'smooth'
        })
    }
    const handleSkills = () => {
        //scroll the page to the about section
        window.scrollTo({
            top: 1900,
            behavior: 'smooth'
        })
    }
    const handleContact = () => {
        //scroll the page to the about section
        window.scrollTo({
            top: 2835,
            behavior: 'smooth'
        })
    }
    return (

        <div className='flex w-full justify-around items-center space-x-16 h-[7rem]'>
            <Image className='invert' width={200} src={logo} alt="" />
            <ul className='text-[#F0F2F4] flex  text-xl transition-colors delay-0 duration-75 hover:text-[#8e9091] '>
                <li className='w-24 flex items-center justify-center  cursor-pointer transition-colors hover:text-[#F0F2F4]'>Home</li>
                <li onClick={handleAbout} className='w-24 flex items-center justify-center  cursor-pointer transition-colors hover:text-[#F0F2F4]'>About</li>
                <li onClick={handleSkills} className='w-24 flex items-center justify-center  cursor-pointer transition-colors hover:text-[#F0F2F4]'>Skills</li>
                <li className='w-24 flex items-center justify-center  cursor-pointer transition-colors hover:text-[#F0F2F4]'>Portfolio</li>
                <li onClick={handleContact} className='w-24 flex items-center justify-center cursor-pointer transition-colors hover:text-[#F0F2F4]'>Contact</li>
                <li className='w-24 flex items-center justify-center  cursor-pointer transition-transform hover:scale-110'>
                    <svg className='transition-transform hover:scale-110' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#F0F2F4"} fill={"none"}>
                        <path d="M20 12L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20 5L4 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20 19L4 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </li>
            </ul>
        </div>

    )
}

export default Navbar

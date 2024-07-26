'use client'
import React from 'react'
import Image from 'next/image'
import pp from './assets/pp.png'
import Link from 'next/link'

const Home = () => {
    const handleAbout = () => {
        //scroll the page to the about section
        window.scrollTo({
            top: 940,
            behavior: 'smooth'
        })
    }
    return (
        <div className='relative h-[100vh] flex items-center justify-between'>
            <div className='w-full flex absolute items-center justify-center bg-center -z-10'>
                <Image src={pp} width={900} className='' alt="" />
            </div>
            <div className='flex flex-col ml-32 space-y-16'>
                <div className='w-1/4 h-2 bg-white'></div>
                <div className='w-[35rem] flex flex-col space-y-7'>
                    <h1 className='text-white font-[700] text-[76px] leading-[76px]'>
                        I’m Prajualit, a MERN Stack Developer
                    </h1>
                    <p className=' font-[400] text-[18px]  leading-[30px] text-[#c3cad5]'></p>
                </div>
                <button onClick={handleAbout} className='flex rounded-full p-8 bg-[#075FE4] w-fit transition-transform ease-in-out duration-300 delay-0 hover:scale-90'>
                    <svg className='animate-bounce' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={50} height={50} color={"white"} fill={"none"}>
                        <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
            <div className='mr-32 flex flex-col w-[23rem] space-y-8'>
                <div className='flex flex-col space-y-8 items-start'>
                    <div className='flex flex-col items-start space-y-5'>
                        <h1 className='text-white font-[700] leading-[20px] text-[18px]'>ABOUT ME</h1>
                        <p className='text-[#c3cad5] font-[400] text-[18px]  leading-[30px]'>I am a passionate Front-end and Back-end Developer. I am always excited to learn new skills and add them to my arsenal...</p>
                    </div>
                    <button onClick={handleAbout} className='text-[#f2f1ff] font-[400] text-[16px] leading-[18px] flex items-center  flex-col space-y-2 group'>
                        <div className='flex space-x-1 items-center'>
                            <span>
                                LEARN MORE
                            </span>
                            <svg className='transition-transform group-hover:translate-x-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"white"} fill={"none"}>
                                <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className='h-[1px] bg-[#828282] w-full group-hover:bg-white transition-colors'>
                        </div>
                    </button>
                    <div className='h-[2px] bg-[#373737] w-full'></div>
                </div>
                <div className='flex flex-col space-y-8 items-start'>
                    <div className='flex flex-col items-start space-y-5'>
                        <h1 className='text-white font-[700] leading-[20px] text-[18px]'>MY WORK</h1>
                        <p className='text-[#c3cad5] font-[400] text-[18px]  leading-[30px]'>I have created several minor projects like UI/UX clones of Twitter, Spotify and Netflix...</p>
                    </div>
                    <button onClick={handleAbout} className='text-[#f2f1ff] font-[400] text-[16px] leading-[18px] flex items-center flex-col space-y-2 group'>
                        <div className='flex space-x-1 items-center'>
                            <span>
                                BROWSE PORTFOLIO
                            </span>
                            <svg className='transition-transform group-hover:translate-x-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"white"} fill={"none"}>
                                <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className='h-[1px] bg-[#828282] w-full group-hover:bg-white transition-colors'>
                        </div>
                    </button>
                    <div className='h-[1px] bg-[#373737] w-full'></div>
                </div>
                <div className='text-white font-[700] text-[20px] leading-[20px]'>
                    FOLLOW ME
                </div>
                <div className='flex space-x-4 items-center'>
                    <Link href="https://x.com/tickoo_sahab">
                        <svg className='cursor-pointer transition-transform hover:-translate-y-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={30} height={30} color={"none"} fill={"white"}>
                            <path d="M2 18.5C3.76504 19.521 5.81428 20 8 20C14.4808 20 19.7617 14.8625 19.9922 8.43797L22 4.5L18.6458 5C17.9407 4.37764 17.0144 4 16 4C13.4276 4 11.5007 6.51734 12.1209 8.98003C8.56784 9.20927 5.34867 7.0213 3.48693 4.10523C2.25147 8.30185 3.39629 13.3561 6.5 16.4705C6.5 17.647 3.5 18.3488 2 18.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        </svg>
                    </Link>
                    <Link href="https://www.linkedin.com/in/prajualit-tickoo-ba09a21b6">
                        <svg className='cursor-pointer transition-transform hover:-translate-y-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={30} height={30} color={"none"} fill={"white"}>
                            <path d="M4.5 9.5H4C3.05719 9.5 2.58579 9.5 2.29289 9.79289C2 10.0858 2 10.5572 2 11.5V20C2 20.9428 2 21.4142 2.29289 21.7071C2.58579 22 3.05719 22 4 22H4.5C5.44281 22 5.91421 22 6.20711 21.7071C6.5 21.4142 6.5 20.9428 6.5 20V11.5C6.5 10.5572 6.5 10.0858 6.20711 9.79289C5.91421 9.5 5.44281 9.5 4.5 9.5Z" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M12.326 9.5H11.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V20C9.5 20.9428 9.5 21.4142 9.79289 21.7071C10.0858 22 10.5572 22 11.5 22H12C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20L14.0001 16.5001C14.0001 14.8433 14.5281 13.5001 16.0879 13.5001C16.8677 13.5001 17.5 14.1717 17.5 15.0001V19.5001C17.5 20.4429 17.5 20.9143 17.7929 21.2072C18.0857 21.5001 18.5572 21.5001 19.5 21.5001H19.9987C20.9413 21.5001 21.4126 21.5001 21.7055 21.2073C21.9984 20.9145 21.9985 20.4432 21.9987 19.5006L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.1531 14.0001 11.174C14 10.5439 14 10.2289 13.8632 9.995C13.7765 9.84686 13.6531 9.72353 13.505 9.63687C13.2711 9.5 12.9561 9.5 12.326 9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        </svg>
                    </Link>
                    <Link href="https://www.youtube.com/@prajualittickoo5482">
                        <svg className='cursor-pointer transition-transform hover:-translate-y-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={30} height={30} color={"none"} fill={"white"}>
                            <path d="M12 20.5C13.8097 20.5 15.5451 20.3212 17.1534 19.9934C19.1623 19.5839 20.1668 19.3791 21.0834 18.2006C22 17.0221 22 15.6693 22 12.9635V11.0365C22 8.33073 22 6.97787 21.0834 5.79937C20.1668 4.62088 19.1623 4.41613 17.1534 4.00662C15.5451 3.67877 13.8097 3.5 12 3.5C10.1903 3.5 8.45489 3.67877 6.84656 4.00662C4.83766 4.41613 3.83321 4.62088 2.9166 5.79937C2 6.97787 2 8.33073 2 11.0365V12.9635C2 15.6693 2 17.0221 2.9166 18.2006C3.83321 19.3791 4.83766 19.5839 6.84656 19.9934C8.45489 20.3212 10.1903 20.5 12 20.5Z" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M15.9621 12.3129C15.8137 12.9187 15.0241 13.3538 13.4449 14.2241C11.7272 15.1705 10.8684 15.6438 10.1728 15.4615C9.9372 15.3997 9.7202 15.2911 9.53799 15.1438C9 14.7089 9 13.8059 9 12C9 10.1941 9 9.29112 9.53799 8.85618C9.7202 8.70886 9.9372 8.60029 10.1728 8.53854C10.8684 8.35621 11.7272 8.82945 13.4449 9.77593C15.0241 10.6462 15.8137 11.0813 15.9621 11.6871C16.0126 11.8933 16.0126 12.1067 15.9621 12.3129Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        </svg>
                    </Link>
                    <Link href="https://www.instagram.com/prajualit.tickoo/">
                        <svg className='cursor-pointer transition-transform hover:-translate-y-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={30} height={30} color={"none"} fill={"white"}>
                            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                            <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                    <Link href="https://www.facebook.com/prajualit.tickoo?mibextid=ZbWKwL">
                        <svg className='cursor-pointer transition-transform hover:-translate-y-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={30} height={30} color={"none"} fill={"white"}>
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.18182 10.3333C5.20406 10.3333 5 10.5252 5 11.4444V13.1111C5 14.0304 5.20406 14.2222 6.18182 14.2222H8.54545V20.8889C8.54545 21.8081 8.74951 22 9.72727 22H12.0909C13.0687 22 13.2727 21.8081 13.2727 20.8889V14.2222H15.9267C16.6683 14.2222 16.8594 14.0867 17.0631 13.4164L17.5696 11.7497C17.9185 10.6014 17.7035 10.3333 16.4332 10.3333H13.2727V7.55556C13.2727 6.94191 13.8018 6.44444 14.4545 6.44444H17.8182C18.7959 6.44444 19 6.25259 19 5.33333V3.11111C19 2.19185 18.7959 2 17.8182 2H14.4545C11.191 2 8.54545 4.48731 8.54545 7.55556V10.3333H6.18182Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        </svg>
                    </Link>
                    <Link href="https://github.com/Prajualit?tab=overview&from=2024-07-01&to=2024-07-25">
                        <svg className='cursor-pointer transition-transform hover:-translate-y-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={33} height={33} color={"none"} fill={"white"}>
                            <path d="M6.51734 17.1132C6.91177 17.6905 8.10883 18.9228 9.74168 19.2333M9.86428 22C8.83582 21.8306 2 19.6057 2 12.0926C2 5.06329 8.0019 2 12.0008 2C15.9996 2 22 5.06329 22 12.0926C22 19.6057 15.1642 21.8306 14.1357 22C14.1357 22 13.9267 18.5826 14.0487 17.9969C14.1706 17.4113 13.7552 16.4688 13.7552 16.4688C14.7262 16.1055 16.2043 15.5847 16.7001 14.1874C17.0848 13.1032 17.3268 11.5288 16.2508 10.0489C16.2508 10.0489 16.5318 7.65809 15.9996 7.56548C15.4675 7.47287 13.8998 8.51192 13.8998 8.51192C13.4432 8.38248 12.4243 8.13476 12.0018 8.17939C11.5792 8.13476 10.5568 8.38248 10.1002 8.51192C10.1002 8.51192 8.53249 7.47287 8.00036 7.56548C7.46823 7.65809 7.74917 10.0489 7.74917 10.0489C6.67316 11.5288 6.91516 13.1032 7.2999 14.1874C7.79575 15.5847 9.27384 16.1055 10.2448 16.4688C10.2448 16.4688 9.82944 17.4113 9.95135 17.9969C10.0733 18.5826 9.86428 22 9.86428 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>

                </div>
            </div>
        </div >
    )
}

export default Home

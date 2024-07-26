import React from 'react'

const About = () => {
  return (
    <div className='h-screen bg-[#22272F] text-white'>
      <div className='flex flex-col space-y-48 h-full justify-center'>
        <div className='flex justify-around items-center h-full'>
          <div className='flex flex-col items-start space-y-10 justify-center'>
            <div className='w-[32rem] flex flex-col items-start space-y-3 '>
              <div className="font-[700] leading-[64px] text-[52px]">
                <span className="font-[700] leading-[22px] text-[20px]"><span className="text-blue-600 font-[900] text-[23px]">/ </span>
                  ABOUT ME</span>
              </div>
              <div className='text-[52px] leading-[64px] font-[700] text-white'>
                I’ve been developing websites since 2023
              </div>
              <div className='text-[18px] leading-[30px] font-[400] text-[#c3cad5]'>I am a passionate Front-end and Back-end Developer. I am always excited to learn new skills and add them to my arsenal. My greatest strength is my temperament. You can find me singing and reading novels when I'm not writing a buggy code or trying the debug it.</div>
            </div>
            <button className='text-[#f2f1ff] font-[400] text-[16px] leading-[18px] flex items-center flex-col space-y-2 group'>
              <div className='flex space-x-1 items-center'>
                <span className='font-[700] leading-[34px] text-[24px]'>
                  More About Me
                </span>
                <svg className='transition-transform group-hover:translate-x-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"white"} fill={"none"}>
                  <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className='h-[1px] bg-[#828282] w-full group-hover:bg-white transition-colors'>
              </div>
            </button>
          </div>
          <div className='w-[32rem] flex flex-col space-y-3 justify-center'>
            <div className='flex space-x-10 text-white'>
              <div className='flex items-center w-[13rem] space-x-2'>
                <span className='font-[700] leading-[86px] text-[76px]'>2</span>
                <span className='font-[700] text-[20px] leading-[22px]'>Years of experience</span>
              </div>
              <div className='flex items-center w-[13rem] space-x-2'>
                <span className='font-[700] leading-[86px] text-[76px]'>10</span>
                <span className='font-[700] text-[20px] leading-[22px]'>Successful projects</span>
              </div>
            </div>
            <div className='text-[18px] leading-[30px] font-[400] text-[#c3cad5]'>
            I have created several minor projects like UI/UX clones of Twitter, Spotify and Netflix. My major projects include a Patreon Clone, a social media website called 'Chirp'. I also built an e-commerce website called 'Desire'.
            </div>
          </div>
        </div>
        <div className='flex justify-center  h-[25%] items-start'>
          <div className='h-[1px] bg-[#828282] w-[90%]'></div>
        </div>
      </div>
    </div>
  )
}

export default About
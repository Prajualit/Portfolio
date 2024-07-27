'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { reset } from 'react-hook-form'

const Contact = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();

    const onSubmit = async (data) => {
        let r = await fetch("http://localhost:3000/", { method: 'POST', body: JSON.stringify(data) });
        let res = await r.text();
        console.log(data);
        reset(); // Reset the form after submission
    }

    return (
        <div className='page-content xl:py-52 p-10 sm:p-20 bg-[#22272F] text-white flex flex-col xl:flex-row space-y-12 xl:space-y-0 xl:items-center justify-around'>
            <div className='flex flex-col justify-center md:w-[30rem] space-y-8'>
                <div className='w-3/12 h-1.5 bg-white'></div>
                <div>
                    <span className='font-[700] leading-[64px] text-[40px] md:text-[52px]'>
                        Interested in working together?
                        <span className='flex items-center space-x-3 group'>
                            <span className=' transition-colors'>
                                Let's talk
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={50} height={50} className="text-[#075fe4] transition-colors" fill="none">
                                <path d="M20.0001 11.9998L4.00012 11.9998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </span>
                </div>
            </div>
            <div className='flex flex-col space-y-16'>
                <form action='' onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-6 md:w-[35rem]'>
                    <div className='group'>
                        <input className='placeholder-white bg-transparent font-[600] sm:text-[20px] md:text-[24px] leading-[34px] py-2 outline-none ' type="text" placeholder='Enter your name' {...register("username", { required: { value: true, message: "Username cannot be empty" }, minLength: { value: 3, message: "Min-Length is 3" }, maxLength: { value: 8, message: "Max-Length is 8" } })} />
                        {errors.username && <div className='text-red-700 transition-all font-semibold text-lg'>{errors.username.message}</div>}
                        <div className='h-[1px] bg-[#828282] w-full group-hover:bg-white transition-colors'></div>
                    </div>
                    <div className='group'>
                        <input className='placeholder-white bg-transparent font-[600] sm:text-[20px] md:text-[24px] leading-[34px] py-3 outline-none ' type="text" placeholder='Enter your email address' {...register("email", { required: { value: true, message: "Email cannot be empty" } })} />
                        {errors.email && <div className='text-red-700 transition-all font-semibold text-lg'>{errors.email.message}</div>}
                        <div className='h-[1px] bg-[#828282] w-full group-hover:bg-white transition-colors'></div>
                    </div>
                    <div className='group'>
                        <input className='placeholder-white bg-transparent font-[600] sm:text-[20px] md:text-[24px] leading-[34px] py-3 pb-20 outline-none ' type="text" placeholder='Describe your project' {...register("desc", { required: { value: true, message: "Description cannot be empty" }, minLength: { value: 8, message: 'Description is too short' } })} />
                        {errors.desc && <div className='text-red-700 transition-all font-semibold text-lg'>{errors.desc.message}</div>}
                        <div className='h-[1px] bg-[#828282] w-full group-hover:bg-white transition-colors'></div>
                    </div>
                    <button className='text-[#f2f1ff] font-[400] text-[16px] leading-[18px] flex flex-col space-y-2 group w-fit'>
                        <div className='flex space-x-1 items-center'>
                            <input type='submit' className='cursor-pointer font-[700] leading-[34px] text-[22px] placeholder-white bg-transparent outline-none' value='Send Message' disabled={isSubmitting} />
                            <svg className='transition-transform group-hover:translate-x-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"white"} fill={"none"}>
                                <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        {errors.form && <div>{errors.form.message}</div>}
                        <div className='h-[1px] bg-[#828282] group-hover:bg-white transition-colors w-full'></div>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact

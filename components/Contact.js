'use client';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setSuccess("");
        setError("");

        if (!email) {
            setError("Email cannot be empty");
            return;
        }
        if (!validateEmail(email)) {
            setError("Please enter a valid email address");
            return;
        }
        if (!message) {
            setError("Please enter your message");
            return;
        }

        const templateParams = {
            from_name: name,
            to_name: "Prajualit Tickoo",
            message,
        };

        setIsLoading(true);
        emailjs
            .send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_USER_ID
            )
            .then(
                () => {
                    setEmail("");
                    setName("");
                    setMessage("");
                    setIsLoading(false);
                    setSuccess("Your message has been sent successfully!");
                },
                (error) => {
                    setError("Something went wrong, please try again later");
                    console.error(error);
                    setIsLoading(false);
                }
            );
    };

    return (
        <div className="page-content xl:py-52 p-10 sm:p-20 bg-[#22272F] text-white flex flex-col xl:flex-row space-y-12 xl:space-y-0 xl:items-center justify-around">
            <div className="flex flex-col justify-center md:w-[30rem] space-y-8">
                <div className="w-3/12 h-1.5 bg-white"></div>
                <div>
                    <span className="font-[700] leading-[64px] text-[40px] md:text-[52px]">
                        Interested in working together?
                        <span className="flex items-center space-x-3 group">
                            <span className="transition-colors">Let&apos;s talk</span>
                        </span>
                    </span>
                </div>
            </div>
            <div className="flex flex-col space-y-6 md:w-[35rem]">
                <div className="group">
                    <input
                        className="placeholder-white bg-transparent font-[600] sm:text-[20px] md:text-[24px] leading-[34px] py-2 outline-none"
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                    />
                    <div className="h-[1px] bg-[#828282] w-full group-hover:bg-white transition-colors"></div>
                </div>
                <div className="group">
                    <input
                        className="placeholder-white bg-transparent font-[600] sm:text-[20px] md:text-[24px] leading-[34px] py-3 outline-none"
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                    />
                    <div className="h-[1px] bg-[#828282] w-full group-hover:bg-white transition-colors"></div>
                </div>
                <div className="group">
                    <input
                        className="placeholder-white bg-transparent font-[600] sm:text-[20px] md:text-[24px] leading-[34px] py-3 pb-20 outline-none"
                        type="text"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Describe your project"
                    />
                    <div className="h-[1px] bg-[#828282] w-full group-hover:bg-white transition-colors"></div>
                </div>
                {error && <div className="text-red-500">{error}</div>}
                {success && <div className="text-[#075fe4]">{success}</div>}
                <button
                    className="text-[#f2f1ff] font-[400] text-[16px] leading-[18px] flex flex-col space-y-2 group w-fit"
                    onClick={sendEmail}
                    disabled={isLoading}
                >
                    <div className="flex space-x-1 items-center">
                        {isLoading ? (
                            <div className="w-6 h-6 border-2 border-white rounded-full animate-spin"></div>
                        ) : (
                            <div className='flex flex-col space-y-2'>
                                <div className='flex space-x-1 items-center'>
                                    <span className='font-[700] leading-[28px] text-[22px]'>
                                        Send Message
                                    </span>
                                    <svg className='transition-transform group-hover:translate-x-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"white"} fill={"none"}>
                                        <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className='h-[1px] bg-[#828282] w-full group-hover:bg-white transition-colors'>
                                </div>
                            </div>
                        )}
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Contact;

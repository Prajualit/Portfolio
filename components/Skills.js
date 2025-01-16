"use client";
import React, { useState } from "react";
import Image from "next/image";

const skillsData = [
    {
        name: "HTML & CSS",
        description: "Intermediate Level Proficiency",
        imgSrc: "https://assets.website-files.com/62727e05bd684c5819e2a981/62727e05bd684c3d5ce2a9fc_html5-round-icon-developer-webflow-ecommerce-template.svg"
    },
    {
        name: "JavaScript",
        description: "Intermediate Level Proficiency",
        imgSrc: "https://assets.website-files.com/62727e05bd684c5819e2a981/62727e05bd684c1583e2a9fd_javascript-round-icon-developer-webflow-ecommerce-template.svg"
    },
    {
        name: "React JS",
        description: "Intermediate Level Proficiency",
        imgSrc: "https://assets.website-files.com/62727e05bd684c5819e2a981/62727e05bd684ccc1ee2aa00_react-js-round-icon-developer-webflow-ecommerce-template.svg"
    },
    {
        name: "Node JS",
        description: "Basic Level Proficiency",
        imgSrc: "https://assets.website-files.com/62727e05bd684c5819e2a981/62727e05bd684c024fe2a9ff_node-js-round-icon-developer-webflow-ecommerce-template.svg"
    },
    {
        name: "Next JS",
        description: "Intermediate Level Proficiency",
        imgSrc: "https://cdn.worldvectorlogo.com/logos/next-js.svg"
    },
    {
        name: "Vite JS",
        description: "Intermediate Level Proficiency",
        imgSrc: "https://logowik.com/content/uploads/images/vite-frontend-tool1721420735.logowik.com.webp"
    },
    {
        name: "Mongo DB",
        description: "Basic Level Proficiency",
        imgSrc: "https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png"
    },
    {
        name: "Blender",
        description: "Advanced Level Proficiency",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZUec-n-9hob9wjcMkAUfoeeqwpmrmpx-lpg&s"
    }
];

const Skills = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const skillsPerPage = 3;

    const handleForward = () => {
        setCurrentPage((prevPage) => (prevPage + 1) % Math.ceil(skillsData.length / skillsPerPage));
    };

    const handlePrevious = () => {
        setCurrentPage((prevPage) => (prevPage - 1 + Math.ceil(skillsData.length / skillsPerPage)) % Math.ceil(skillsData.length / skillsPerPage));
    };

    const currentSkills = skillsData.slice(currentPage * skillsPerPage, (currentPage + 1) * skillsPerPage);

    return (
        <div id="skills" className="page-content py-20 relative text-white flex flex-col items-center justify-center">

            <div className="flex flex-col space-y-16">
                <div className="flex px-4 flex-col xl:flex-row w-full justify-around items-center xl:items-end space-y-6 xl:space-y-0">
                    <div className="flex flex-col space-y-4 md:items-start items-center">
                        <div className="font-[700] leading-[64px] text-[52px]">
                            <span className="font-[700] leading-[22px] text-[20px]"><span className="text-blue-600 font-[900] text-[23px]">/ </span>
                            MY SKILLS</span>
                        </div>
                        <div className="text-center font-[700] leading-[64px] text-[35px] md:text-[52px]">
                            My extensive list of skills
                        </div>
                    </div>
                    <div className="flex space-x-3 ">
                        <button onClick={handlePrevious} className="flex rounded-full p-3 md:p-5 bg-[#2D343F] w-fit transition-all hover:scale-95 hover:bg-[#075FE4]">
                            <svg
                                className="rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width={35}
                                height={35}
                                color={"white"}
                                fill={"none"}
                            >
                                <path
                                    d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                        <button onClick={handleForward} className="flex rounded-full p-3 md:p-5 bg-[#075FE4] w-fit transition-transform hover:scale-95">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width={35}
                                height={35}
                                color={"white"}
                                fill={"none"}
                            >
                                <path
                                    d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col xl:flex-row xl:space-x-8 items-center justify-center overflow-x-auto space-y-6 xl:space-y-0">
                    {currentSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="md:w-[25rem] md:h-[30rem] rounded-[2rem] bg-[#2D343F] flex flex-col space-y-10 justify-center p-12 pt-16 items-start transition-all"
                        >
                            <div className="flex flex-col space-y-2.5 justify-center items-start">
                                <span className="mb-5">
                                    <Image className="rounded-full"
                                        width={70}
                                        height={70}
                                        src={skill.imgSrc}
                                        alt=''
                                    />
                                </span>
                                <span className="font-[700] text-[25px] md:text-[38px] leading-[46px]">
                                    {skill.name}
                                </span>
                                <span className="font-[400] leading-[38px] md:text-[24px] text-[#c3cad5]">
                                    {skill.description}
                                </span>
                            </div>
                            <div className="w-2/12 h-1.5 bg-white"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;

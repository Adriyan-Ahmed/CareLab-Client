import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { LuClipboardEdit } from "react-icons/lu";

const Profile = () => {

    const [show, setShow] = useState(false);

    return (
        <>
            <section>
                <div className="text-center py-10 md:py-16 lg:py-28 space-y-4 md:space-y-6 lg:space-y-10 bg-[#1BD15D] bg-opacity-10">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl  font-bold text-[#1BD15D]">PROFILE</h1>
                    <h3 className="py-3.5 px-6 md:py-5 md:px-16 bg-[#1BD15D] bg-opacity-50 text-base md:text-base inline-block rounded-[4px] font-semibold text-white"><span className="flex items-center gap-2"><MdOutlineDashboardCustomize></MdOutlineDashboardCustomize> DASHBOARD <IoIosArrowForward></IoIosArrowForward> PROFILE </span></h3>
                </div>
            </section>

            <section className='container mx-auto'>
                <div className='mx-4'>
                    <div className='flex flex-col lg:flex-row gap-8'>
                        <aside className='flex-[1]'>
                            <div className='p-6 flex flex-col items-center justify-center w-full h-full bg-[#F9FAFB] rounded-lg gap-5'>
                                <div className='p-4 border-[#1BD15D] border rounded-lg'>
                                    <img className='h-32 rounded-lg' src="https://i.ibb.co/zH98DLb/images-q-tbn-ANd9-Gc-R77i-Oan-UEw-D6c-R1bth7-E0y0jn-AJCn-DH6-Zp1-Q-usqp-CAU.jpg" alt="" />
                                </div>
                                <div className='text-center space-y-2'>
                                    <h1 className='text-lg font-semibold text-[#1BD15D] tracking-wider'>Adriyan Ahmed</h1>
                                    <h1 className='tracking-wider'>adriyan.ahmed.jubayer@gamil.com</h1>
                                    <h1 className='tracking-wider'>01919434805</h1>
                                </div>
                            </div>
                        </aside>
                        <div className='flex-[3] rounded-lg space-y-7'>
                            <div className='flex items-center justify-between p-7 rounded-lg bg-[#F9FAFB] '>
                                <h1 className='text-xl font-bold tracking-wider text-[#1BD15D]'>MY PROFILE</h1>
                                <button onClick={() => {
                                    setShow(!show)
                                }} className='py-3 px-6 bg-[#1BD15D] font-bold rounded text-white'>{show ? <> DISCARD</> : <span className='flex items-center gap-1'><LuClipboardEdit></LuClipboardEdit> EDIT INFO</span> }</button>
                            </div>
                            <div className='bg-[#F9FAFB]  p-7 rounded-lg'>
                                {
                                    show ? <form className='flex flex-col lg:flex-row gap-4'>
                                        <div className='flex-[3] flex flex-col lg:flex-row'>
                                            
                                        </div>
                                        <div className='flex-[1] '></div>
                                    </form> :
                                        <div className='flex flex-col md:flex-row lg:flex-wrap gap-8'>
                                            <div className='flex-1 space-y-5'>
                                                <div className='space-y-2'>
                                                    <span className='font-semibold text-gray-500 tracking-wider'>Full Name</span>
                                                    <h1 className='text-lg font-bold tracking-wider '>Adriyan Ahmed</h1>
                                                </div>
                                                <div className='space-y-2'>
                                                    <span className='font-semibold text-gray-500 tracking-wider'>E-mail Address</span>
                                                    <h1 className='text-lg font-bold tracking-wider'>adriya.ahmed.jubayer@gamil.com</h1>
                                                </div>
                                            </div>
                                            <div className='flex-1 space-y-5'>
                                                <div className='space-y-2'>
                                                    <span className='font-semibold text-gray-500 tracking-wider'>Number</span>
                                                    <h1 className='text-lg font-bold tracking-wider'>019XXXXXXXXX</h1>
                                                </div>
                                                <div className='space-y-2'>
                                                    <span className='font-semibold text-gray-500 tracking-wider'>Full Name</span>
                                                    <h1 className='text-lg font-bold tracking-wider'>Adriyan Ahmed</h1>
                                                </div>
                                            </div>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Profile;
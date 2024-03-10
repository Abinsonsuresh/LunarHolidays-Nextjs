'use client'
import Link from "next/link"
import React, { useState } from 'react'
import { NavLinks, Services } from "../Data/data"
import Button from "./Button"
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { VscChromeClose } from "react-icons/vsc";
import { SlMenu } from "react-icons/sl";
import { MdOutlineSearch } from 'react-icons/md'


const Navbar = () => {

    const [nav, setNav] = useState(false)

    const shownav = () => {
        setNav(!nav)
    }
    return (
        <>
            <nav className="flex items-center justify-between p-6 ">
                <div className="">
                    <div className="text-2xl font-bold"><span className="text-green-50">Lunar</span><span className="text-green-900 underline">Holidays</span></div>
                </div>
                <ul className="gap-12 h-full hidden md:flex">
                    {
                        NavLinks.map((items) => (
                            <Link className="text-gray-50 text-[16px] flex justify-center items-center" key={items.key} href={items.href}>{items.label}</Link>
                        ))
                    }
                </ul>
                <div>
                    <div className="hidden md:flex">
                        <Link href={"/"}>
                            <Button type={"button"} name={"Login"} icon="/user.svg" variant={"px-4 py-2 bg-green-500 text-white"} />
                        </Link>
                    </div>
                </div>

                <div className='md:hidden flex justify-center items-center gap-3  relative z-50 mobnav'>
                    <div className={!nav ? 'flex justify-center items-center gap-3' : "hidden"}>

                        <SlMenu className='cursor-pointer' onClick={() => shownav()} />
                    </div>

                    <div className={nav ? ('fixed  bg-white shadow-2xl h-[100%] w-[60%]  top-0 right-0 flex flex-col justify-between ease-in duration-100') : ('fixed right-[-100%]  h-[70%] flex flex-col items-center justify-between ease-in')}>
                        <div className="absolute top-0 right-0 p-6">
                            <VscChromeClose size={20} className='cursor-pointer' onClick={() => shownav()} />
                        </div>

                        <div>

                            <ul className='flex justify-start flex-col gap-9 p-6 mt-12 w-full'>
                                {
                                    NavLinks.map((items) => (
                                        <Link className="text-gray-50 text-[16px] flex justify-start items-start" key={items.key} href={items.href}>{items.label}</Link>
                                    ))
                                }
                                <p className="font-semibold">Our Services</p>
                                {
                                    Services.map((items) => (
                                        <Link className="text-gray-50 text-[16px] flex justify-start items-start" key={items.key} href={items.href}>{items.label}</Link>
                                    ))
                                }
                            </ul>

                        </div>

                        <div className='p-4 flex justify-center'>
                            <Link href={"/"}>
                                <Button type={"button"} name={"Login"} icon="/user.svg" variant={"px-4 py-2 bg-green-500 text-white"} />
                            </Link>
                        </div>



                    </div>
                </div>

            </nav>



        </>
    )
}

export default Navbar
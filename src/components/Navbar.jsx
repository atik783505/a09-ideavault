'use client'
import Link from "next/link";
import { useState } from "react";
import ThemeSwicth from "./ThemeSwicth";
import Image from "next/image";
import logo from '../../public/images/ideavault_navbar (1).png'
import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/react";
import { authClient } from "@/lib/auth-client";


const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { data: session, isPending } = authClient.useSession();


    const user = session?.user
    console.log(user)

    const links = <>
        <li>
            <Link href="#">Features</Link>
        </li>
        <li>
            <Link href="#">Pricing</Link>
        </li>
        <li>
            <Link href="#">ideas</Link>
        </li>
        <Image src={user?.image} alt="image" width={100} height={100}></Image>
    </>

    return (
        <div>
            <nav className="sticky top-0 z-40 border-b  bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-full w-11/12 mx-auto mt-3">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-4">
                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className="sr-only">Menu</span>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                        <div><Image src={logo} alt="logo" width={250} height={250}></Image></div>
                    </div>
                    <ul className="hidden items-center gap-4 md:flex">
                        {links}
                    </ul>
                    <div className="flex gap-1 items-center">
                        <ThemeSwicth></ThemeSwicth>
                        <Link href='/login'>
                            <Button className='rounded-md'>Login</Button>
                        </Link>
                        <Link href='/register'>
                            <Button variant="outline" className='rounded-md hidden md:flex'>Register</Button>
                        </Link>
                    </div>
                 
                </header>
                {isMenuOpen && (
                    <div className="border-t border-separator md:hidden">
                        <ul className="flex flex-col gap-2 p-4">
                            {links}
                        </ul>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
'use client'
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation"; // অ্যাক্টিভ পেজ ট্র্যাকিংয়ের জন্য
import ThemeSwicth from "./ThemeSwicth";
import Image from "next/image";
import logo from '../../public/images/logo_transparent_final.png'
import { Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import CustomTrigger from "./UserDropDown";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { data: session, isPending } = authClient.useSession();
    const pathname = usePathname(); 

    const user = session?.user;
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Ideas", href: "/all-ideas" },
        { name: "Add Idea", href: "/add-ideas" },
        { name: "My Ideas", href: "/my-ideas" },
        { name: "My Interactions", href: "/my-interactions" },
    ];

    const renderLinks = (isMobile = false) => {
        return navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
                <li key={link.href} className={isMobile ? "w-full" : ""}>
                    <Link
                        href={link.href}
                        onClick={() => isMobile && setIsMenuOpen(false)} 
                        className={`block text-sm font-medium tracking-wide transition-colors py-1.5 px-3 rounded-lg md:p-0 md:rounded-none
                            ${isActive 
                                ? "text-blue-600 dark:text-blue-500 font-semibold" 
                                : "text-default-600 dark:text-default-400 hover:text-blue-600 dark:hover:text-blue-500"
                            }
                        `}
                    >
                        {link.name}
                    </Link>
                </li>
            );
        });
    };

    return (
        <nav className="sticky top-0 z-50 w-11/12 mx-auto mt-3 border bg-white/70 dark:bg-black/40 backdrop-blur-md border-white/20 dark:border-white/10 shadow-lg rounded-2xl md:rounded-full transition-all duration-300">
            <header className="flex h-16 items-center justify-between px-4 sm:px-6">
                <div className="flex items-center gap-2 sm:gap-4">
                    <button
                        className="md:hidden p-2 text-default-600 dark:text-default-400 hover:bg-default-100 dark:hover:bg-default-800 rounded-xl transition-colors focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                    <div className="flex items-center gap-2 select-none shrink-0">
                        <Image 
                            src={logo} 
                            alt="logo" 
                            width={50} 
                            height={50} 
                            className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 object-contain shrink-0"
                        />
                        <h4 className="text-blue-600 dark:text-blue-500 text-lg sm:text-xl md:text-2xl font-black tracking-tight">
                            IdeaVault
                        </h4>
                    </div>
                </div>
                <ul className="hidden items-center gap-6 md:flex">
                    {renderLinks(false)}
                </ul>
                <div className="flex gap-2 items-center shrink-0">
                    <ThemeSwicth />
                    
                    {isPending ? (
                        <div className="w-8 h-8 rounded-full bg-default-200 animate-pulse" /> // লোডিং 
                    ) : user ? (
                        <CustomTrigger user={user} />
                    ) : (
                        <div className="flex items-center gap-2">
                            <Link href='/login'>
                                <Button size="sm" color="primary" variant="flat" className="font-semibold rounded-xl">
                                    Login
                                </Button>
                            </Link>
                            <Link href='/register'>
                                <Button size="sm" color="primary" variant="solid" className="font-semibold text-white bg-blue-600 rounded-xl hidden md:flex shadow-sm">
                                    Register
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>
            </header>
            {isMenuOpen && (
                <div className="md:hidden border-t border-default-200/50 dark:border-default-100/20 max-h-[70vh] overflow-y-auto rounded-b-2xl">
                    <ul className="flex flex-col gap-1.5 p-4 bg-white/90 dark:bg-black/80 backdrop-blur-lg rounded-b-2xl">
                        {renderLinks(true)}
                        
                        {!user && (
                            <li className="pt-2 border-t border-default-100 dark:border-default-800 mt-2">
                                <Link href='/register' onClick={() => setIsMenuOpen(false)} className="block w-full">
                                    <Button size="sm" color="primary" variant="solid" className="w-full font-semibold text-white bg-blue-600 rounded-xl">
                                        Register
                                    </Button>
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
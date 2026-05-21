import { LogoFacebook, LogoGithub, LogoLinkedin, LogoLinux } from '@gravity-ui/icons';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import logo from '../../public/images/ideavault_navbar (1).png'
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="w-11/12 rounded-lg mb-5 mx-auto mt-20 relative overflow-hidden">
            <div className="w-full bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md border-t border-white/20 dark:border-zinc-800/50 py-12 px-6 md:px-12 transition-colors duration-300">

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

                    <div className="space-y-4">
                        <Image src={logo} alt='logo' width={400} height={400}></Image>
                        <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                            IdeaVault is a secure space to share your startup ideas, collaborate with a vibrant community of builders, and bring your unique vision to life.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-zinc-100 uppercase tracking-wider">
                            Platform
                        </h3>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-zinc-400">
                            <li>
                                <a href="#ideas" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">All Ideas</a>
                            </li>
                            <li>
                                <a href="#categories" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">Categories</a>
                            </li>
                            <li>
                                <a href="#top-startups" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">Top Startups</a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-zinc-100 uppercase tracking-wider">
                            Contact Info
                        </h3>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-zinc-400">
                            <li className="flex items-center gap-2">
                                <Mail size={16} className="text-blue-600 dark:text-sky-400" />
                                <span>support@startuphub.com</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={16} className="text-blue-600 dark:text-sky-400" />
                                <span>+880 1234-567890</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin size={16} className="text-blue-600 dark:text-sky-400" />
                                <span>Cumilla, Bangladesh</span>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-zinc-100 uppercase tracking-wider">
                            Follow Us
                        </h3>
                        <div className="flex gap-3">
                            <a href="#" className="p-2 rounded-lg bg-white/20 dark:bg-zinc-800/40 border border-white/20 dark:border-zinc-700/30 hover:bg-blue-600 hover:text-white dark:hover:bg-sky-500 transition-all text-slate-700 dark:text-zinc-300">
                                <LogoFacebook></LogoFacebook>
                            </a>
                            <a href="#" className="p-2 rounded-lg bg-white/20 dark:bg-zinc-800/40 border border-white/20 dark:border-zinc-700/30 hover:bg-blue-400 hover:text-white dark:hover:bg-sky-400 transition-all text-slate-700 dark:text-zinc-300">
                                <LogoLinkedin></LogoLinkedin>
                            </a>
                            <a href="#" className="p-2 rounded-lg bg-white/20 dark:bg-zinc-800/40 border border-white/20 dark:border-zinc-700/30 hover:bg-slate-900 hover:text-white dark:hover:bg-zinc-700 transition-all text-slate-700 dark:text-zinc-300">
                                <LogoGithub></LogoGithub>
                            </a>
                            <a href="#" className="p-2 rounded-lg bg-white/20 dark:bg-zinc-800/40 border border-white/20 dark:border-zinc-700/30 hover:bg-slate-900 hover:text-white dark:hover:bg-zinc-700 transition-all text-slate-700 dark:text-zinc-300">
                                <FaXTwitter />
                            </a>
                        </div>
                    </div>

                </div>
                <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-slate-900/5 dark:border-white/5 text-center md:flex md:justify-between md:items-center text-xs text-slate-500 dark:text-zinc-500">
                    <p>© {new Date().getFullYear()} IdeaVault. All rights reserved.</p>
                    <div className="mt-2 md:mt-0 space-x-4">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Terms of Service</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
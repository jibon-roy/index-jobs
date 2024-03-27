"use client";
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
// import Headroom from 'headroom.js';
import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline';
import ToggleTheme from '../theme/TaggleTheme';
import Headroom from 'react-headroom';


interface NavLink {
    title: string;
    icon: JSX.Element;
    href: string;
}

interface NavbarProps {
    links: NavLink[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
    const [isOpen, setIsOpen] = useState(false);
    // const [darkTheme, setDarkTheme] = useState(false);


    // Initialize headroom.js for navbar hiding on scroll
    // React.useEffect(() => {
    //     const navbar = document.getElementById('navbar');
    //     if (navbar) {
    //         const headroom = new Headroom(navbar);
    //         headroom.init();
    //         headroom.pin()
    //     }
    // }, []);


    return (
        <Headroom pin>
            <nav id="navbar" className="shadow-sm headroom headroom--pinned w-full z-50 top-0 font-semibold bg-c-primary">
                <div className="max-w-[1280px] mx-auto px-2">
                    <div className="flex  bg-c-primary items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img className="h-10 w-10" src="/next.svg" alt="Logo" />
                            </div>
                        </div>
                        <div className="hidden md:flex justify-center items-center">
                            <div className=" flex justify-center items-center space-x-6">
                                {links.map((link, index) => (
                                    <a key={index} href={link.href} className="text-c-text py-3 menu-text after:absolute after:hover:w-full after:transition-[width] after:duration-200 after:h-[3px] after:translate-x-1/2 after:right-1/2 after:bg-c-secondary after:bottom-1 relative hover:text-c-text-hover">
                                        <span>{link.title}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-c-text hover:text-c-text-hover focus:outline-none"
                            >
                                <Bars3BottomLeftIcon className="h-6 w-6 text-c-secondary" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="flex items-center justify-center">
                            <ToggleTheme></ToggleTheme>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition-opacity duration-75"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

                            {links.map((link, index) => (
                                <a key={index} href={link.href} className="flex flex-col text-c-text py-3 menu-text after:absolute after:hover:w-full after:transition-[width] after:duration-200 after:h-[3px] after:translate-x-1/2 after:right-1/2 after:bg-c-secondary after:bottom-1 relative hover:text-c-text-hover">
                                    <span>{link.title}</span>
                                </a>
                            ))}

                        </div>
                    </div>
                </Transition>
            </nav>
        </Headroom>

    );
};

export default Navbar;

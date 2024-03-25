"use client";
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import Headroom from 'headroom.js';
import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline';
import ToggleTheme from '../theme/TaggleTheme';


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
    const [darkTheme, setDarkTheme] = useState(false);


    // Initialize headroom.js for navbar hiding on scroll
    React.useEffect(() => {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            const headroom = new Headroom(navbar);
            headroom.init();
        }
    }, []);


    return (
        <nav id="navbar" className="shadow-lg bg-c-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex  bg-c-primary items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img className="h-8 w-8" src="/next.svg" alt="Logo" />
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {links.map((link, index) => (
                                    <a key={index} href={link.href} className="text-c-text hover:text-c-linkHover">
                                        {link.icon}
                                        <span className="ml-2">{link.title}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-gray-200 focus:outline-none"
                        >
                            <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
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
                            <a
                                key={index}
                                href={link.href}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${darkTheme ? 'text-gray-200 hover:text-gray-300' : 'text-white hover:text-gray-200'}`}
                            >
                                {link.icon}
                                <span className="ml-2">{link.title}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </Transition>
        </nav>
    );
};

export default Navbar;

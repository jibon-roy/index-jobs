"use client"

import { useTheme } from 'next-themes';


const ToggleTheme = () => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    return (
        <button
            className="bg-transparent p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none"
            onClick={toggleTheme}
        >
            <div className="relative w-10 h-6 bg-c-bg rounded-full">
                <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-c-primary transition-transform duration-300 ${theme === 'dark' ? 'transform translate-x-full' : ''}`} />
            </div>
        </button>
    );

}
export default ToggleTheme;

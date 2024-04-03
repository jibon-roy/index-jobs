import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FaMoon, FaSun } from 'react-icons/fa';

const ToggleTheme = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Ensure theme is loaded before rendering
    useEffect(() => setMounted(true), []);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    if (!mounted) return null;
    // Fixed mounted problem
    return (
        <button
            className="bg-transparent p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none"
            onClick={toggleTheme}
        >
            <div className="relative w-10 h-6 bg-c-bg flex justify-center items-center border border-solid border-c-secondary rounded-full">

                <div className={`absolute flex justify-center items-center left-1 w-4 h-4 rounded-full transition-transform duration-300 ${theme === 'dark' ? 'transform rotate-180 translate-x-full' : ''
                    }`}>
                    {theme === 'dark' ?
                        <FaMoon
                            className={` rounded-full bg-white p-[1px] text-black -rotate-180 transition-transform duration-300 `}
                        />
                        :
                        <FaSun
                            className={`rounded-full bg-black p-[1px]  text-white rotate-180 transition-transform duration-300 `}
                        />
                    }
                </div>
            </div>
        </button>
    );
};

export default ToggleTheme;


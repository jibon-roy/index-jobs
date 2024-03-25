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
            hi

        </button>
    );

}
export default ToggleTheme;

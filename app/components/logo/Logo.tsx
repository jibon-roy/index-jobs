import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

const Logo = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => localStorage.getItem('theme') === 'light' ? setMounted(true) : setMounted(true), []);

    if (!mounted) return (
        <div className="flex justify-center gap-2 items-center">
            <img className="h-10 w-10" src={mounted ? "/logo.svg" : "darklogo.svg"} alt="Logo" />
            <div className='text-2xl'><span className='text-[#22ab59]'>Active</span>Workers</div>
        </div>
    );

    return (
        <div className="flex justify-center gap-2 items-center">
            <img className="h-10 w-10" src={theme === 'dark' ? "/darklogo.svg" : 'logo.svg'} alt="Logo" />
            <div className='text-2xl'><span className='text-[#22ab59]'>Active</span>Workers</div>
        </div>
    );
};

export default Logo;
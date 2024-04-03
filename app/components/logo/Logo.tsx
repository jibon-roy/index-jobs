import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';

const Logo = () => {
    const { theme } = useTheme();

    const LogoImage = theme === 'dark' ? '/darklogo.svg' : '/logo.svg';

    return (
        <div className="flex justify-center gap-2 items-center">
            {/* Use the Next.js Image component */}
            <Image src={LogoImage} alt="Logo" width={40} height={40} />
            <div className='text-2xl'><span className='text-[#22ab59]'>Active</span>Workers</div>
        </div>
    );
};

export default Logo;

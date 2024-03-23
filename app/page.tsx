
"use client"
import { HomeIcon, DocumentTextIcon, BriefcaseIcon, UsersIcon } from '@heroicons/react/24/outline';

import Navbar from './components/Navigation/Navbar';
import { useContext } from 'react';
import { ColorContext } from './providers/colors/ColorProvider';


const links = [
  { title: 'Home', icon: <HomeIcon className="h-6 w-6" />, href: '/' },
  { title: 'Projects', icon: <DocumentTextIcon className="h-6 w-6" />, href: '/projects' },
  { title: 'Jobs', icon: <BriefcaseIcon className="h-6 w-6" />, href: '/jobs' },
  { title: 'Freelancers', icon: <UsersIcon className="h-6 w-6" />, href: '/freelancers' },
];

export default function Home() {

  const colors = useContext(ColorContext)
  console.log(colors)

  return (
    <div>
      <Navbar links={links} />
      {/* Rest of your content */}
    </div>
  );
}
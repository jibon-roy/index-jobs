"use client"
import { HomeIcon, DocumentTextIcon, BriefcaseIcon, UsersIcon } from '@heroicons/react/24/outline';
import Navbar from './components/Navigation/Navbar';





const links = [
  { title: 'Home', icon: <HomeIcon className="h-6 w-6" />, href: '/' },
  { title: 'Projects', icon: <DocumentTextIcon className="h-6 w-6" />, href: '/projects' },
  { title: 'Jobs', icon: <BriefcaseIcon className="h-6 w-6" />, href: '/jobs' },
  { title: 'Freelancers', icon: <UsersIcon className="h-6 w-6" />, href: '/freelancers' },
];

export default function App() {

  return (
    <div>
      <Navbar links={links} />
      <div className='text-2xl text-c-primary'>
        Some text
      </div>
    </div >
  );
}

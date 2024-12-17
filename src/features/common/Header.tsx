'use client';

import { useEffect, useState } from 'react';

import { Facebook, Instagram, Linkedin } from 'lucide-react';

import { Link } from '@/components/ui/link';

import Logo from './Logo';

const headerItems = [
  { label: 'Work', href: '/' },
  { label: 'Services', href: '/' },
  { label: 'About', href: '/' },
  { label: 'Contact', href: '/' },
];

const secondaryItems = [
  { label: 'Ventures', href: '/' },
  { label: 'News', href: '/news' },
  { label: 'Careers', href: '/' },
  { label: 'Internships', href: '/' },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <div
        className={`fixed left-0 right-0 top-0 z-50 flex h-24 items-center justify-between px-10 transition-colors duration-200 md:px-20 ${
          isScrolled && !isMenuOpen ? 'bg-black/50 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <Logo />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='group z-50 text-xl font-bold text-white'
        >
          {isMenuOpen ? 'CLOSE' : 'MENU'}
          <span className='relative ml-1 w-4'>
            <span
              className={`absolute left-0 text-theme transition-all duration-300 ${
                isMenuOpen ? 'rotate-90 opacity-0' : 'opacity-100'
              }`}
            >
              {'//'}
            </span>
            <span
              className={`absolute left-0 text-theme transition-all duration-300 ${
                isMenuOpen ? 'opacity-100' : '-rotate-90 opacity-0'
              }`}
            >
              X
            </span>
          </span>
        </button>
      </div>

      {/* Full screen menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-all duration-300 ${
          isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <nav
          className={`flex h-full flex-col px-6 transition-all duration-300 md:container md:mx-auto md:flex-row md:items-center md:justify-center md:gap-20 ${
            isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          {/* Primary navigation */}
          <div className='mt-32 flex w-full flex-col items-start justify-start gap-2 text-4xl font-bold text-white md:mt-0 md:text-7xl'>
            {headerItems.map((item) => (
              <Link
                href={item.href}
                key={item.label}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Divider line for md screens */}
          <div className='hidden h-96 w-[3px] bg-white/20 md:block'></div>

          {/* Secondary navigation and socials container */}
          <div className='mb-20 flex flex-col gap-12 pt-20 md:my-0 md:w-full md:gap-20 md:pt-0'>
            <div className='flex w-full flex-col items-start justify-start gap-2 text-xl font-bold text-white md:text-3xl'>
              {secondaryItems.map((item) => (
                <Link
                  href={item.href}
                  key={item.label}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className='flex items-center gap-10 text-white'>
              <Instagram />
              <Linkedin />
              <Facebook />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;

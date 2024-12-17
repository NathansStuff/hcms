import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

import { Link } from '@/components/ui/link';

import Logo from './Logo';

function Footer() {
  return (
    <div className='flex flex-col items-center justify-center bg-black pb-12 pt-32 text-white'>
      <Logo />
      <div className='flex flex-col items-center justify-center gap-10 px-4 pt-20 md:px-10'>
        <div className='flex flex-col items-center justify-center gap-10 lg:flex-row'>
          <div className='flex flex-row items-center justify-center gap-5'>
            <Link
              href='/'
              className='text-sm'
            >
              Ventures
            </Link>
            <Link
              href='/'
              className='text-sm'
            >
              News
            </Link>
            <Link
              href='/'
              className='text-sm'
            >
              Careers
            </Link>
            <Link
              href='/'
              className='text-sm'
            >
              Internships
            </Link>
            <Link href='/'>
              <Instagram className='size-4' />
            </Link>
            <Link href='/'>
              <Linkedin className='size-4' />
            </Link>
            <Link href='/'>
              <Facebook className='size-4' />
            </Link>
          </div>
          <div className='flex flex-row items-center justify-center gap-5'>
            <Image
              src={'https://dijgtal.com/assets/partnerships/googleLogoBlack.png'}
              alt='google'
              width={50}
              height={100}
            />
            <Image
              src={'https://dijgtal.com/assets/partnerships/metaLogoBlack.png'}
              alt='meta'
              width={80}
              height={100}
            />{' '}
            <Image
              src={'https://dijgtal.com/assets/partnerships/hubSpotLogoBlack.png'}
              alt='hubspot'
              width={140}
              height={200}
            />
          </div>
          <div className='flex flex-row items-center justify-center gap-5'>
            <Link
              href='/'
              className='text-sm'
            >
              Privacy Policy
            </Link>
            <p className='text-sm'>Copyright © 2024 Dijgtal</p>
          </div>
        </div>
        <p className='text-xs text-gray-400'>
          Site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
        </p>
      </div>
    </div>
  );
}

export default Footer;

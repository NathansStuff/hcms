import Image from 'next/image';

import { Link } from '@/components/ui/link';

function Logo() {
  return (
    <Link href='/'>
      <Image
        src='/logo.svg'
        alt='Logo'
        className='invert'
        width={186}
        height={24}
      />
    </Link>
  );
}

export default Logo;

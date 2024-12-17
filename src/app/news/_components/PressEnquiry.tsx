'use client';

import { ArrowRightIcon } from 'lucide-react';
import { useState } from 'react';

export default function PressEnquiry() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <h3
      className='bg-theme group inline-block px-5 py-5 text-2xl font-bold text-black md:text-3xl'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Start the conversation
      <ArrowRightIcon
        className={`size-8 font-bold inline-block overflow-hidden transition-all duration-200 ${isHovered ? 'w-7' : 'w-0'}`}
      />
    </h3>
  );
}

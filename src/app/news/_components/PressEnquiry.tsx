'use client';

import { useState } from 'react';

import { ArrowRightIcon } from 'lucide-react';

export default function PressEnquiry() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <h3
      className='group inline-block bg-theme px-5 py-5 text-2xl font-bold text-black md:text-3xl'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Start the conversation
      <ArrowRightIcon
        className={`inline-block size-8 overflow-hidden font-bold transition-all duration-200 ${isHovered ? 'w-7' : 'w-0'}`}
      />
    </h3>
  );
}

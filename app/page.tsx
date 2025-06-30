'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@mantine/core';
import { QUESTION_COUNT } from '@/shared/constant';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <main
      className={`w-full flex flex-1 flex-col items-center justify-center`}
      style={{ background: currentIndex === 0 ? '#0077F6' : '' }}
    >
      {currentIndex > 0 && (
        <div className='w-full flex flex-col flex-1 relative'>
          <div
            className='absolute left-0 bottom-0 w-full bg-[#0077F6]'
            style={{ height: `${(currentIndex / QUESTION_COUNT) * 100}%` }}
          >
            hello
          </div>
        </div>
      )}
      {currentIndex === 0 && (
        <div className='flex flex-col gap-7'>
          <Image
            src='/images/home.png'
            alt='home image'
            width={400}
            height={400}
            className='rounded-xl'
          />
          <Button
            variant='filled'
            color='blue.9'
            size='xl'
            radius='md'
            onClick={() => setCurrentIndex(1)}
          >
            시작하기
          </Button>
        </div>
      )}
    </main>
  );
}

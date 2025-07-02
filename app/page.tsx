'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button, Progress } from '@mantine/core';
import { QUESTION_COUNT } from '@/shared/constant';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const percent = Math.min((currentIndex / QUESTION_COUNT) * 100, 100);

  return (
    <main
      className={`max-w-[500px] w-screen flex flex-1 flex-col items-center bg-[#0077F6] px-3 ${currentIndex === 0 ? ' justify-center' : ''}`}
    >
      {currentIndex > 0 && (
        <div className='mt-5 w-full'>
          <Progress color='#0000B1' value={percent} />
        </div>
      )}
      {currentIndex === 0 && (
        <div className='flex flex-col gap-7'>
          <Image
            src='/images/home.png'
            alt='home image'
            width={300}
            height={300}
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

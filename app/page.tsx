'use client';

import { useState } from 'react';
import { Button } from '@mantine/core';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <main className='w-full flex flex-1 flex-col items-center justify-center border p-5'>
      {currentIndex === 0 && (
        <div className='flex flex-col'>
          <Button
            variant='filled'
            color='blue.9'
            size='xl'
            className='fixed bottom-5'
            onClick={() => setCurrentIndex(1)}
          >
            시작하기
          </Button>
        </div>
      )}
    </main>
  );
}

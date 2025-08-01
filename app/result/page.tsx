'use client';

import { useSearchParams } from 'next/navigation';
import { Button, Text } from '@mantine/core';

export default function Result() {
  const searchParams = useSearchParams();
  const score = searchParams.get('score');

  return (
    <main className='max-w-[500px] w-full mx-auto flex flex-1 flex-col items-center bg-[#0077F6] px-3'>
      <Text c='white'>{score}</Text>
      <div className='flex flex-col gap-5'>
        <Button variant='filled' color='blue.9' size='xl' radius='md'>
          결과 공유하기
        </Button>
        <Button
          variant='filled'
          color='white'
          size='xl'
          radius='md'
          styles={{
            root: {
              color: '#0000b1',
              backgroundColor: '#fff',
              '&:hover': {
                backgroundColor: '#f3f3f3',
                color: '#0000b1',
              },
            },
          }}
        >
          전체결과 확인하기
        </Button>
      </div>
    </main>
  );
}

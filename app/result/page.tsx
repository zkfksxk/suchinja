'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Button, Text } from '@mantine/core';
import { RESULT_LIST } from '@/shared/content/swimming/constant';

export default function ResultPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const level = searchParams.get('level');
  const levelNum = parseInt(level || '0');

  const result =
    RESULT_LIST.find((r) => r.level === levelNum) || RESULT_LIST[0];

  return (
    <main className='max-w-[500px] w-full mx-auto flex flex-1 flex-col items-center bg-[#0077F6] px-3'>
      <Text c='white' size='xl' fw={700} mb='md'>
        {result.title}
      </Text>
      <Text c='white' size='lg' mb='xl' ta='center'>
        {result.description}
      </Text>
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
          onClick={() => router.push('/result/list')}
        >
          전체 결과 확인하기
        </Button>
      </div>
    </main>
  );
}

'use client';

import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button, Text } from '@mantine/core';
import { RESULT_LIST } from '@/shared/contents/swimming/constant';

export default function ResultPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const level = searchParams.get('level');
  const levelNum = parseInt(level || '0');

  const result =
    RESULT_LIST.find((r) => r.level === levelNum) || RESULT_LIST[0];

  return (
    <main className='max-w-[500px] w-full mx-auto flex flex-1 flex-col items-center bg-[#0077F6] px-5 py-8'>
      <div className='flex flex-col gap-5 items-center'>
        <Text c='white' variant='subtitle-b-14'>
          {result.title}
        </Text>
        <Image
          src={result.image}
          alt='결과 이미지'
          width={250}
          height={250}
          className='rounded-xl border-2 border-white shadow-lg mb-8'
        />
      </div>

      <ul className='bg-white mb-8 list-disc list-outside p-8 space-y-2 w-full max-w-[350px] rounded-lg'>
        {result.description.map((item, index) => (
          <li key={index}>
            <Text c='black' variant='text-r-10'>
              {item}
            </Text>
          </li>
        ))}
      </ul>
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
          onClick={() => router.push('/content/suchinja/result/list')}
        >
          전체 결과 확인하기
        </Button>
      </div>
    </main>
  );
}

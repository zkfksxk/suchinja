'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Text } from '@mantine/core';
import { RESULT_LIST } from '@/shared/contents/swimming/constant';

export default function ResultListPage() {
  const router = useRouter();

  const handleResultClick = (level: number) => {
    router.push(`/content/suchinja/result?level=${level}`);
  };

  return (
    <main className='max-w-[500px] w-full mx-auto flex flex-1 flex-col items-center bg-[#0077F6] px-3 pt-8'>
      <Text c='white' variant='subtitle-b-14'>
        전체 결과
      </Text>
      <div className='space-y-4 w-full'>
        {RESULT_LIST.map((result, index) => (
          <div
            key={index}
            className='flex gap-2 p-4 bg-white rounded-lg'
            onClick={() => handleResultClick(result.level)}
          >
            <Image
              src={result.image}
              alt='테스트결과 이미지'
              width={50}
              height={50}
              className='rounded-xl'
            />
            <div className='flex flex-col gap-1'>
              <Text variant='text-b-10' c='black'>
                {result.title}
              </Text>
              <Text variant='text-r-10' c='blue.9'>
                {result.subtitle}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

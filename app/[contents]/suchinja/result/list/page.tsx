import Image from 'next/image';
import Link from 'next/link';
import { Text } from '@mantine/core';
import { RESULT_LIST } from '@/shared/contents/swimming/constant';

export default function ResultListPage() {
  return (
    <main className='max-w-[500px] w-full mx-auto flex flex-1 flex-col items-center bg-[#0077F6] px-5 py-8'>
      <Text c='white' variant='subtitle-b-14'>
        전체 결과
      </Text>
      <div className='space-y-4 w-full mt-5'>
        {RESULT_LIST.map((result, index) => (
          <Link
            key={index}
            href={`/content/suchinja/result?level=${result.level}`}
            className='flex gap-2 p-4 bg-white rounded-lg cursor-pointer hover:bg-gray-50 transition-colors'
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
          </Link>
        ))}
      </div>
    </main>
  );
}

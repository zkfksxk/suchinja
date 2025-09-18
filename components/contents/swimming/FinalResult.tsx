'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button, Text } from '@mantine/core';
import { toPng } from 'html-to-image';

interface Props {
  result: {
    level: number;
    title: string;
    subtitle: string;
    description: string[];
    image: string;
  };
}

export const FinalResult = ({ result }: Props) => {
  const router = useRouter();
  const captureRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleShare = async () => {
    if (!captureRef.current) return;

    try {
      const dataUrl = await toPng(captureRef.current, {
        backgroundColor: '#0077F6',
        pixelRatio: 2,
        cacheBust: true,
        includeQueryParams: true,
      });

      const link = document.createElement('a');
      link.download = `${result.title}.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('캡처 실패:', error);
    }
  };

  return (
    <main className='max-w-[500px] w-full mx-auto flex flex-1 flex-col items-center bg-[#0077F6] px-5 py-8'>
      <div ref={captureRef} className='flex flex-col items-center'>
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
            onLoadingComplete={() => setImageLoaded(true)}
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
      </div>
      <div className='flex flex-col gap-5'>
        <Button
          variant='filled'
          color='blue.9'
          size='xl'
          radius='md'
          onClick={handleShare}
          disabled={!imageLoaded}
        >
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
};

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button, Progress, Text } from '@mantine/core';
import { QUESTION_COUNT, QUESTION_LIST } from '@/shared/constant';

export default function Home() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedQuestionIdAnswerIdMap, setSelectedQuestionIdAnswerIdMap] =
    useState<Record<number, number>>({});
  const percent = Math.min((currentIndex / QUESTION_COUNT) * 100, 100);
  const currentQuestion = QUESTION_LIST.find((q) => q.id === currentIndex);

  const handleAnswerClick = (questionId: number, answerId: number) => {
    setSelectedQuestionIdAnswerIdMap((prev) => ({
      ...prev,
      [questionId]: answerId,
    }));

    if (currentIndex < QUESTION_COUNT) {
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 300);
    } else {
      router.push('/result');
      console.log(selectedQuestionIdAnswerIdMap);
    }
  };

  return (
    <main
      className={`relative max-w-[500px] w-screen flex flex-1 flex-col items-center bg-[#0077F6] px-3 ${currentIndex === 0 ? ' justify-center' : ''}`}
    >
      {currentIndex > 0 && (
        <Progress
          color='#0000B1'
          value={percent}
          className='absolute left-0 top-[30px] w-full'
        />
      )}

      {currentIndex > 0 && (
        <div
          className='absolute left-1/2 top-1/2 w-full max-w-[450px]'
          style={{ transform: 'translate(-50%, -50%)' }}
        >
          <div className='flex flex-col w-full border border-yellow-500'>
            <Text
              c='white'
              style={{
                fontSize: '1.8rem',
                fontWeight: 800,
              }}
            >{`Q.${currentIndex} ${currentQuestion?.question}`}</Text>

            <div className='mt-[100px] flex flex-col gap-3'>
              {currentQuestion?.answers.map((answer) => (
                <Text
                  key={answer.id}
                  onClick={() =>
                    handleAnswerClick(currentQuestion.id, answer.id)
                  }
                  className={`
                  flex
                  justify-center
                  items-center
                bg-white
                  w-full
                  h-[72px]
                  rounded-md
                  text-center
                  text-black
                  text-2xl
                  font-extrabold
                  cursor-pointer
                  hover:bg-[#0000b1]
                  hover:!text-white
                `}
                >
                  {answer.text}
                </Text>
              ))}
            </div>
          </div>
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

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button, Progress, Text } from '@mantine/core';
import { QUESTION_COUNT, QUESTION_LIST } from '@/shared/constant';

export default function Home() {
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
    }
  };

  return (
    <main
      className={`max-w-[500px] w-screen flex flex-1 flex-col items-center bg-[#0077F6] px-3 ${currentIndex === 0 ? ' justify-center' : ''}`}
    >
      {currentIndex > 0 && (
        <div className='mt-5 w-full'>
          <Progress color='#0000B1' value={percent} />
          <div>
            <Text c='white'>{`Q.${currentIndex} ${currentQuestion?.question}`}</Text>
            {currentQuestion?.answers.map((answer) => (
              <Text
                c='white'
                key={answer.id}
                onClick={() => handleAnswerClick(currentQuestion.id, answer.id)}
                style={{
                  cursor: 'pointer',
                  background:
                    selectedQuestionIdAnswerIdMap[currentQuestion.id] ===
                    answer.id
                      ? '#0077F6'
                      : 'transparent',
                }}
              >
                {answer.text}
              </Text>
            ))}
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

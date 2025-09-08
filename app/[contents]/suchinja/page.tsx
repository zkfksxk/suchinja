'use client';

import { Fragment, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ActionIcon, Button, Progress, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IoMdArrowRoundBack } from 'react-icons/io';
import CopySuccessModal from '@/components/common/CopySuccessModal';
import {
  QUESTION_COUNT,
  QUESTION_LIST,
  RESULT_LIST,
} from '@/shared/contents/swimming/constant';
import { calculateScore } from '@/shared/contents/swimming/utils';

export default function SuchinjaPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedQuestionIdAnswerIdMap, setSelectedQuestionIdAnswerIdMap] =
    useState<Record<number, number>>({});
  const [copyModalOpened, { open: copyModalOpen, close: copyModalClose }] =
    useDisclosure(false);

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
      const finalScore = calculateScore(selectedQuestionIdAnswerIdMap);
      const result = RESULT_LIST.find((result) => finalScore <= result.level);
      const level = result?.level || RESULT_LIST[0].level;

      router.push(`/content/suchinja/result?level=${level}`);
    }
  };

  const handleShare = async () => {
    const url = window.location.href;

    if (!navigator.clipboard) {
      alert('이 브라우저에서는 클립보드 복사가 지원되지 않습니다.');
      return;
    }

    try {
      await navigator.clipboard.writeText(url);
      copyModalOpen();
    } catch (error) {
      if (error instanceof Error)
        alert('공유하기 실패: ' + (error?.message || '알 수 없는 오류'));
    }
  };

  const handleBack = () => {
    setCurrentIndex(currentIndex - 1);
  };

  return (
    <Fragment>
      <main
        className={`relative max-w-[500px] w-full mx-auto flex flex-1 flex-col items-center bg-[#0077F6] px-5 ${currentIndex === 0 ? ' justify-center' : ''}`}
      >
        {currentIndex > 0 && (
          <div className='flex flex-row w-full items-center gap-4 mt-10'>
            <ActionIcon
              size={24}
              variant='transparent'
              aria-label='뒤로가기'
              onClick={handleBack}
            >
              <IoMdArrowRoundBack color='black' size={24} />
            </ActionIcon>

            <Progress color='#0000B1' value={percent} className=' w-full' />
          </div>
        )}

        {currentIndex > 0 && (
          <div
            className='absolute left-1/2 top-1/2 w-full px-3'
            style={{ transform: 'translate(-50%, -50%)' }}
          >
            <div className='flex flex-col gap-5'>
              <Text
                c='white'
                variant='subtitle-b-14'
              >{`Q.${currentIndex} ${currentQuestion?.question}`}</Text>

              <div className='flex flex-col gap-3'>
                {currentQuestion?.answers.map((answer) => (
                  <Text
                    key={answer.id}
                    onClick={() =>
                      handleAnswerClick(currentQuestion.id, answer.id)
                    }
                    c='black'
                    variant='text-b-10'
                    className={`
                  flex
                  justify-center
                  items-center
                bg-white
                  w-full
                  h-[72px]
                  rounded-md
                  text-center
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
          <div className='flex flex-col gap-10'>
            <Image
              src='/images/home.png'
              alt='home image'
              width={300}
              height={300}
              className='rounded-xl'
            />
            <div className='flex flex-col gap-5'>
              <Button
                variant='filled'
                color='blue.9'
                size='xl'
                radius='md'
                onClick={() => setCurrentIndex(1)}
              >
                시작하기
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
                onClick={handleShare}
              >
                테스트 공유하기
              </Button>
            </div>
          </div>
        )}
      </main>
      <CopySuccessModal opened={copyModalOpened} onClose={copyModalClose} />
    </Fragment>
  );
}

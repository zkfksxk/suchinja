import { Text } from '@mantine/core';
import { RESULT_LIST } from '@/shared/content/swimming/constant';

export default function ResultListPage() {
  return (
    <main className='max-w-[500px] w-full mx-auto flex flex-1 flex-col items-center bg-[#0077F6] px-3'>
      <Text c='white' size='xl' fw={700} mb='xl'>
        전체 결과 보기
      </Text>
      <div className='space-y-4 w-full'>
        {RESULT_LIST.map((result, index) => (
          <div key={index} className='p-4 bg-white rounded-lg'>
            <Text fw={700} size='lg' c='dark'>
              {result.title}
            </Text>
            <Text size='sm' c='dimmed'>
              {result.description}
            </Text>
          </div>
        ))}
      </div>
    </main>
  );
}

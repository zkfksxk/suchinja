import { Text } from '@mantine/core';
import { RESULT_LIST } from '@/shared/contents/swimming/constant';

export default function ResultListPage() {
  return (
    <main className='max-w-[500px] w-full mx-auto flex flex-1 flex-col items-center bg-[#0077F6] px-3 pt-8'>
      <Text c='white' size='xl' fw={700} mb='xl'>
        전체 결과
      </Text>
      <div className='space-y-4 w-full'>
        {RESULT_LIST.map((result, index) => (
          <div key={index} className='p-4 bg-white rounded-lg'>
            <Text variant='text-b-10' c='black'>
              {result.title}
            </Text>
            <Text variant='text-r-10' c='blue.9'>
              {result.subtitle}
            </Text>
          </div>
        ))}
      </div>
    </main>
  );
}

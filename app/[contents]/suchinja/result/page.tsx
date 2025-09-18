import { type Metadata } from 'next';
import { FinalResult } from '@/components/contents/swimming/FinalResult';
import { RESULT_LIST } from '@/shared/contents/swimming/constant';

interface Props {
  searchParams: Promise<{ level?: string }>;
}

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const { level } = await searchParams;
  const levelNum = parseInt(level || '0');
  const result =
    RESULT_LIST.find((r) => r.level === levelNum) || RESULT_LIST[0];

  return {
    title: `테스트 결과: ${result.title}`,
    description: result.subtitle,
    openGraph: {
      title: `테스트 결과: ${result.title}`,
      description: result.subtitle,
      images: [
        {
          url: result.image,
          width: 250,
          height: 250,
          alt: result.title,
        },
      ],
      type: 'website',
    },
  };
}

export default async function ResultPage({ searchParams }: Props) {
  const { level } = await searchParams;
  const levelNum = parseInt(level || '0');
  const result =
    RESULT_LIST.find((r) => r.level === levelNum) || RESULT_LIST[0];

  return <FinalResult result={result} />;
}

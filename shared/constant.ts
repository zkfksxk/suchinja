import { Questions } from './types';

export const SITE_CONFIG = {
  title: '수친자 테스트',
  description: '내가 수영을 사랑하는 정도는?',
};

export const QUESTION_COUNT = 10; //12~14까지 늘리기

export const questionList: Questions = [
  {
    id: 1,
    question: '방학이 끝나고, 드디어 새학기가 되었다! 나의 기분은?',
    answers: [
      { id: 1, text: '설레면서도 잘 지낼 수 있을까 걱정된다.' },
      { id: 2, text: '새로운 친구들을 만날 생각에 너무 기대된다.' },
    ],
  },
];

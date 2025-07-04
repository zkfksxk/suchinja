import { Questions } from './types';

export const SITE_CONFIG = {
  title: '수친자 테스트',
  description: '내가 수영을 사랑하는 정도는?',
};

export const QUESTION_COUNT = 10; //12~14까지 늘리기

export const QUESTION_LIST: Questions = [
  {
    id: 1,
    question: '선호하는 시간대는?',
    answers: [
      { id: 1, text: '아침' },
      { id: 2, text: '저녁' },
      { id: 3, text: '그런 걸 따지다니. 언제 하든 옳아' },
    ],
  },
  {
    id: 2,
    question: '수영장 가기 직전, 내 기분은?',
    answers: [
      { id: 1, text: '설레서 시간에 맞추어 준비한다.' },
      { id: 2, text: '밍기적거리다가 아슬아슬하게 도착한다.' },
      { id: 3, text: '오늘은 피곤하니 스킵~' },
    ],
  },
  {
    id: 3,
    question: '수영을 못 가는 날이 생기면?',
    answers: [
      { id: 1, text: '아쉬워서 계속 생각난다.' },
      { id: 2, text: '다음에 가지 뭐 하고 넘긴다.' },
    ],
  },
];

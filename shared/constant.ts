import { Questions } from './types';

export const SITE_CONFIG = {
  title: '수친자 테스트',
  description: '내가 수영을 사랑하는 정도는?',
};

export const QUESTION_COUNT = 10; //12~14까지 늘리기

export const QUESTION_LIST: Questions = [
  {
    id: 1,
    question: '수영하기에 선호하는 시간대는?',
    answers: [
      { id: 1, text: '새벽 수영이죠.' },
      { id: 2, text: '아침 수영이죠. 하루를 알차게 시작하는 느낌이 좋아요.' },
      { id: 3, text: '저녁 수영이죠.' },
    ],
  },
  {
    id: 2,
    question: '수영장 가기 직전, 나의 기분은?',
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
      { id: 1, text: '아쉬워서 주중/주말에 하루 더 투자한다.' },
      { id: 2, text: '다음에 가지 뭐 하고 넘긴다.' },
    ],
  },
  {
    id: 4,
    question: '다음 달 여름휴가 계획 중입니다. 당신의 선택은?',
    answers: [
      { id: 1, text: '숙소를 예약할 때 수영장이 있는지 확인한다.' },
      { id: 2, text: '현지 수영장을 검색한다.' },
      { id: 3, text: '자연이 최고죠! 바다나 계곡을 고려한다.' },
      { id: 4, text: '무슨 휴가까지 와서 수영이야.' },
    ],
  },
  {
    id: 5,
    question: '수영을 위해 새벽에 줄을 서본 적이 있나?',
    answers: [
      { id: 1, text: '수(水)강신청 성공을 위해 알람 2개 맞추고 대기함' },
      { id: 2, text: '아니, 그렇게까지 해본 적 없어.' },
    ],
  },
  {
    id: 6,
    question: '수영을 위해 가장 많이 투자하는 부분은?',
    answers: [
      { id: 1, text: '시간이죠. 일상이 수영을 중심으로 돌아가요.' },
      { id: 2, text: '머니머니해도 돈! 특히 새 수영복은 참을 수 없다구' },
    ],
  },
  {
    id: 7,
    question: '다른 지역의 수영장을 찾아가 본 적이 있나?',
    answers: [
      { id: 1, text: '나만의 원정 수영이 DB가 있어' },
      { id: 2, text: '동네 수영장 정도 방문한 적 있어.' },
      { id: 4, text: '지금 다니는 수영장도 솔직히 좀 귀찮아.' },
    ],
  },
  {
    id: 8,
    question: '수영을 못 가는 날이 생기면?',
    answers: [
      { id: 1, text: '아쉬워서 계속 생각난다.' },
      { id: 2, text: '다음에 가지 뭐 하고 넘긴다.' },
    ],
  },
  {
    id: 9,
    question: '수영을 못 가는 날이 생기면?',
    answers: [
      { id: 1, text: '아쉬워서 계속 생각난다.' },
      { id: 2, text: '다음에 가지 뭐 하고 넘긴다.' },
    ],
  },
  {
    id: 10,
    question: '수영을 못 가는 날이 생기면?',
    answers: [
      { id: 1, text: '아쉬워서 계속 생각난다.' },
      { id: 2, text: '다음에 가지 뭐 하고 넘긴다.' },
    ],
  },
];

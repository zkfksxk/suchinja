import { Questions } from './types';

export const SITE_CONFIG = {
  title: '수친자 테스트',
  description: '내가 수영을 사랑하는 정도는?',
};

export const QUESTION_COUNT = 10; //12~14까지 늘리기

export const QUESTION_LIST: Questions = [
  {
    id: 1,
    question: '주섬주섬 수영 가방을 챙기는 당신. 그때의 기분은?',
    answers: [
      { id: 1, text: '설레서 시간에 맞추어 준비한다.', score: 5 },
      { id: 2, text: '밍기적거리다가 아슬아슬하게 도착한다.', score: 3 },
      { id: 3, text: '오늘은 피곤한데 건너뛸까?', score: 0 },
    ],
  },
  {
    id: 2,
    question: '수영장에 도착했다. 지금 시간은?',
    answers: [
      { id: 1, text: '아침 수영. 차가운 물 속에서 정신이 번쩍', score: 5 },
      { id: 2, text: '저녁 수영. 피곤하지만 오늘도 화이팅', score: 5 },
      { id: 3, text: '그때그때 다름.', score: 0 },
    ],
  },
  {
    id: 3,
    question: '아뿔싸. 오늘 수영을 못 가게 되었다.',
    answers: [
      { id: 1, text: '아쉬워서 주중/주말에 하루 더 투자한다.', score: 5 },
      { id: 2, text: '다음에 가지 뭐 하고 넘긴다.', score: 0 },
    ],
  },
  {
    id: 4,
    question: '여름휴가를 계획 중입니다. 그럴 때 나는?',
    answers: [
      { id: 1, text: '숙소를 예약할 때 수영장이 있는지 확인한다.', score: 3 },
      { id: 2, text: '현지 수영장을 검색한다.', score: 5 },
      { id: 3, text: '자연이 최고! 바다나 계곡을 고려한다.', score: 3 },
      { id: 4, text: '무슨 휴가까지 와서 수영이야.', score: 0 },
    ],
  },
  {
    id: 5,
    question: '수영을 위해 새벽에 줄을 서야한다는걸 알게 되었다.',
    answers: [
      { id: 1, text: '수(水)강신청을 위해 알람 2개 맞추고 대기함', score: 5 },
      { id: 2, text: '나중에 기회가 있겠지.', score: 0 },
    ],
  },
  {
    id: 6,
    question: '수영을 위해 가장 많이 투자하는 부분은?',
    answers: [
      { id: 1, text: '시간. 일상이 수영을 중심으로 돌아간다.', score: 5 },
      {
        id: 2,
        text: '머니머니해도 돈! 특히 새 수영복은 참을 수 없다.',
        score: 3,
      },
    ],
  },
  {
    id: 7,
    question: '여유로운 주말. 자유 수영을 가고자 한다. 내 선택은?',
    answers: [
      {
        id: 1,
        text: '오늘은 또 어디로 가볼까? 나만의 원정 수영장 DB가 있다.',
        score: 5,
      },
      { id: 2, text: '귀찮으니 한 곳만 판다.', score: 3 },
    ],
  },
  {
    id: 8,
    question: '우리 동네에 수영 대회가 열린다고 한다. 내 반응은?',
    answers: [
      { id: 1, text: '한 번 참여해볼까?', score: 5 },
      { id: 2, text: '그런 건 선수들만 나가는 거 아님?', score: 3 },
    ],
  },
  {
    id: 9,
    question: '프리다이빙에 대한 당신의 관심은?',
    answers: [
      { id: 1, text: '이미 자격증 따거나 준비 중이다.', score: 5 },
      { id: 2, text: '관심은 있지만 아직 도전해보진 않았다.', score: 3 },
      { id: 3, text: '오직 수영파.', score: 3 },
    ],
  },
  {
    id: 10,
    question: '수영할 때 오리발을 써본 적 있나요?',
    answers: [
      { id: 1, text: '오리발 장착하면 내가 바로 돌핀', score: 5 },
      { id: 2, text: '가끔 사용하는데 좀 어색하다.', score: 3 },
      { id: 3, text: '다리에 쥐 날 거 같아서 안 쓴다.', score: 0 },
    ],
  },
];

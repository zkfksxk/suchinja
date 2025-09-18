import { Questions, Result } from './types';

export const SITE_CONFIG = {
  domain: 'https://suchinja.vercel.app',
  thumbnail: 'images/suchinja/thumbnail.png',
  title: '수친자 테스트',
  description: '내가 수영을 사랑하는 정도는?',
  image_alt: '내가 수영을 사랑하는 정도는?',
};

export const QUESTION_COUNT = 10; //12~14까지 늘리기

export const QUESTION_LIST: Questions = [
  {
    id: 1,
    question: '주섬주섬 수영 가방을 챙기는 당신. 그때의 기분은?',
    answers: [
      { id: 1, text: '설레서 시간에 맞추어 준비한다.', score: 10 },
      { id: 2, text: '밍기적거리다가 아슬아슬하게 도착.', score: 5 },
      { id: 3, text: '오늘은 피곤한데 건너뛸까?', score: 0 },
    ],
  },
  {
    id: 2,
    question: '수영장에 도착했다. 지금 시간은?',
    answers: [
      { id: 1, text: '아침 수영. 차가운 물 속에서 정신이 번쩍', score: 10 },
      { id: 2, text: '저녁 수영. 피곤하지만 오늘도 화이팅', score: 10 },
      { id: 3, text: '가끔 이벤트 느낌으로 참여.', score: 3 },
    ],
  },
  {
    id: 3,
    question: '아뿔싸. 오늘 수영을 못 가게 되었다.',
    answers: [
      { id: 1, text: '아쉬워서 주중/주말에 하루 더 투자한다.', score: 10 },
      { id: 2, text: '다음에 가지 뭐 하고 넘긴다.', score: 0 },
    ],
  },
  {
    id: 4,
    question: '휴가를 계획 중입니다. 이때 나는?',
    answers: [
      { id: 1, text: '숙소를 예약할 때 수영장이 있는지 확인한다.', score: 5 },
      { id: 2, text: '현지 수영장을 검색한다.', score: 10 },
      { id: 3, text: '자연이 최고! 바다나 계곡을 고려한다.', score: 10 },
      { id: 4, text: '무슨 휴가까지 와서 수영이야.', score: 0 },
    ],
  },
  {
    id: 5,
    question: '수영 강습을 위해 새벽에 줄을 서야한다는걸 알게 되었다.',
    answers: [
      { id: 1, text: '수(水)강신청을 위해 알람 2개 맞추고 대기함', score: 10 },
      { id: 2, text: '결국 놓치고 다음을 노린다.', score: 0 },
    ],
  },
  {
    id: 6,
    question: '가장 많이 투자하는 부분은?',
    answers: [
      { id: 1, text: '시간. 일상이 수영을 중심으로 돌아간다.', score: 10 },
      {
        id: 2,
        text: '머니머니해도 돈! 특히 새 수영복은 참을 수 없다.',
        score: 5,
      },
      {
        id: 3,
        text: '노 관심 노 머니',
        score: 0,
      },
    ],
  },
  {
    id: 7,
    question: '여유로운 주말. 자유 수영을 갈 지 고민된다. 내 선택은?',
    answers: [
      {
        id: 1,
        text: '오늘은 또 어디로 가볼까? 나만의 원정 수영장 DB가 있다.',
        score: 10,
      },
      { id: 2, text: '귀찮으니 한 곳만 판다.', score: 5 },
      { id: 3, text: '주말은 좀 쉬자...!', score: 0 },
    ],
  },
  {
    id: 8,
    question: '우리 동네에 수영 대회가 열린다고 한다. 내 반응은?',
    answers: [
      { id: 1, text: '이미 접수했다.', score: 10 },
      { id: 2, text: '그런 건 선수들만 나가는 거 아님?', score: 0 },
    ],
  },
  {
    id: 9,
    question: '물 액티비티(프리다이빙, 스노쿨링, 서핑)에 대한 관심은?',
    answers: [
      {
        id: 1,
        text: '시간이 없어서 못 한다. 이미 도전해봤거나 자격증 보유 중!',
        score: 10,
      },
      { id: 2, text: '수영도 벅차..', score: 0 },
    ],
  },
  {
    id: 10,
    question: '수영 관련 앱이나 도구를 사용하시나요?',
    answers: [
      {
        id: 1,
        text: '마음에 드는 앱으로 꾸준히 기록 중',
        score: 10,
      },
      { id: 2, text: '귀찮아서 가아끔 한다.', score: 5 },
      { id: 3, text: '그런 게 있는 줄도 몰랐어.', score: 0 },
    ],
  },
  {
    id: 11,
    question: '동호회나 소모임 활동에 대한 생각은?',
    answers: [
      { id: 1, text: '같이 하면 즐거움이 2배! 이미 참여 중.', score: 10 },
      { id: 2, text: '놉. 혼자가 편해.', score: 0 },
    ],
  },
];

export const RESULT_LIST: Result[] = [
  {
    level: 10,
    title: '물이 무서운 맥주병',
    subtitle: '수영의 재미를 모르는 당신 아쉬워요.',
    image: '/images/suchinja/beer.png',
    description: [
      '보통 발 빼고 뽀송뽀송한 편',
      '튜브가 있으면 잠깐 용기를 내고, 없으면 짐 지킴이 전담',
      '“가만히 뜬다.”라는 개념이 도저히 이해 불가',
      '발 안 닿는 곳은 절대 NO NO',
      '바다에선 수영보다 사진이 주 관심',
    ],
  },
  {
    level: 35,
    title: '귀여운 수린이',
    subtitle: '수영의 매력에 막 발을 담근 초보',
    image: '/images/suchinja/surine.png',
    description: [
      '물에 얼굴 담그는 건 이제 문제없음',
      '킥판이 최고로 든든한 친구',
      '강사님 말은 잘 듣지만, 머릿속은 혼돈',
      '이것은 발차기인가, 물장구인가...',
      '옆 레인 고수들의 우아한 영법에 눈이 반짝임',
      '침대에서 수영 자세 한 번씩 재연해 봄',
      '의욕이 가득할 때. 하지만 이때 꺽이면 수영과 영영 멀어질 확률 높아짐',
    ],
  },
  {
    level: 60,
    title: '성실한 좀비',
    subtitle: '늘 같은 시간대에 출몰. 느리지만 꾸준함',
    image: '/images/suchinja/zombie.png',
    description: [
      '종종 하루 일정을 마치고 느릿하게 등장. 수영하며 서서히 되살아남',
      '힘이 빡 들어간 자세에서 조금씩 여유가 생김',
      '쉬지 않고 25m 완주 시 성취감 폭발',
      '장비 업그레이드에 관심 생김. (통장아, 미안해...)',
      '수영장에서 익숙해진 얼굴들과 기묘한 동지애',
      '가끔 자유 수영을 갔다오면 스스로가 꽤 대견',
    ],
  },
  {
    level: 80,
    title: '여유로운 낭만러',
    subtitle: '수영 없인 삶이 허전',
    image: '/images/suchinja/nangman.png',
    description: [
      '영법에 익숙해져서 여유와 선호가 생김',
      '물속에서 나만의 리듬 생김',
      '자유도가 높아지면서 새로운 재미(바다수영, 스쿠버/프리다이빙 등등)를 탐구',
      '여행 코스에 꼭 물과 관련된 걸 집어넣음',
      '수영으로 맺어진 소중한 인연들이 있음',
    ],
  },
  {
    level: 95,
    title: '나는야 수중 생물',
    subtitle: '물은 제 2의 고향',
    image: '/images/suchinja/king.png',
    description: [
      '영법 올라운더. 대체로 마스터반에 속해 있음',
      '“오늘은 얼마나 가볼까?” 스스로 미션을 부여하고 도전',
      '수영 관련 도구로 꼼꼼하게 기록',
      '사계절 수영 러버. 한겨울 수영도 색다른 매력',
      '자유 시간? 자유 수영하는 날!',
    ],
  },
];

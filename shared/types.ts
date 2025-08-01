export type Answer = {
  id: number;
  text: string;
  score: number;
};

export type Question = {
  id: number;
  question: string;
  answers: Answer[];
};

export type Questions = Question[];

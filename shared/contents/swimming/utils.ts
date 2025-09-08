import { QUESTION_LIST } from './constant';

export const calculateScore = (
  selectedAnswers: Record<number, number>
): number => {
  let totalScore = 0;

  Object.entries(selectedAnswers).forEach(([questionId, answerId]) => {
    const question = QUESTION_LIST.find((q) => q.id === parseInt(questionId));
    const answer = question?.answers.find((a) => a.id === answerId);

    if (answer) {
      totalScore += answer.score;
    }
  });

  return totalScore;
};

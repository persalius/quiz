export const quizSteps = {
  language: 'language',
  gender: 'gender',
  age: 'age',
  hate: 'hate',
  topics: 'topics',
} as const;

export const additionalQuiz = {
  email: 'email',
} as const;

export const quizStepsLength = Object.values(quizSteps).length;

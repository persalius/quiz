import { additionalQuiz, quizSteps } from '@/shared/constants/quiz';
import { Quiz } from '@/shared/types/quiz';

// Quiz default configuration
export const quizDefaultData: Quiz = {
  [quizSteps.language]: {
    order: 1,
    title: 'What is your preferred language?',
    type: 'single-select',
    answer: '',
  },
  [quizSteps.gender]: {
    order: 2,
    title: 'What gender do you identify with?',
    type: 'single-select-image',
    answer: '',
  },
  [quizSteps.age]: {
    order: 3,
    title: 'What is your age?',
    type: 'single-select',
    answer: '',
  },
  [quizSteps.hate]: {
    order: 4,
    title: 'What do you hate the most in a book?',
    type: 'multiple-select',
    answer: '',
  },
  [quizSteps.topics]: {
    order: 5,
    title: 'What are your favorite topics?',
    type: 'bubble',
    answer: '',
  },
  [additionalQuiz.email]: {
    order: 6,
    title: 'Email',
    type: 'email',
    answer: '',
  },
};

// Shared constants
export const ageValues = {
  youngAdult: '18-29',
  adults30s: '30-39',
  adults40s: '40-49',
  seniors: '50+',
};

// Quiz variants
export const genderVariants = [
  {
    image: '/female.png',
    translateValue: 'female',
    value: 'Female',
  },
  {
    image: '/male.png',
    translateValue: 'male',
    value: 'Male',
  },
  {
    image: '/smile.png',
    translateValue: 'other',
    value: 'Other',
  },
];

export const ageVariants = [
  {
    value: ageValues.youngAdult,
    translateValue: 'youngAdult',
  },
  {
    value: ageValues.adults30s,
    translateValue: 'adults30s',
  },
  {
    value: ageValues.adults40s,
    translateValue: 'adults40s',
  },
  {
    value: ageValues.seniors,
    translateValue: 'seniors',
  },
];

export const hateVariants = [
  {
    translateValue: 'logic',
    value: 'Lack of logic',
  },
  {
    translateValue: 'speed',
    value: 'A slow speed',
  },
  {
    translateValue: 'humor',
    value: 'Lack of humor',
  },
  {
    translateValue: 'generic',
    value: 'Way too generic ending',
  },
];

export const topicsVariants = [
  {
    image: '/werewolf.png',
    value: 'Werewolf',
    translateValue: 'werewolf',
    filters: {
      byAge: [ageValues.adults30s, ageValues.adults40s, ageValues.seniors],
    },
  },
  {
    image: '/action.png',
    value: 'Action',
    translateValue: 'action',
    filters: {
      byAge: [ageValues.adults40s, ageValues.seniors],
    },
  },
  {
    image: '/royalObsession.png',
    value: 'Royal Obsession',
    translateValue: 'royalObsession',
    filters: {
      byAge: [ageValues.adults30s, ageValues.adults40s, ageValues.seniors],
    },
  },
  {
    image: '/romance.png',
    value: 'Romance',
    translateValue: 'romance',
    filters: {
      byAge: [ageValues.adults40s, ageValues.seniors],
    },
  },
  {
    image: '/youngAdult.png',
    value: 'Young Adult',
    translateValue: 'youngAdult',
    filters: {
      byAge: [ageValues.youngAdult],
    },
  },
  {
    image: '/badBoy.png',
    value: 'Bad Boy',
    translateValue: 'badBoy',
    filters: {
      byAge: [ageValues.youngAdult, ageValues.adults30s],
    },
  },
  {
    image: '/billionaire.png',
    value: 'Billionaire',
    translateValue: 'billionaire',
    filters: {
      byAge: [ageValues.youngAdult, ageValues.adults40s],
    },
  },
];

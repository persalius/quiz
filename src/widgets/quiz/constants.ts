import { Quiz } from '@/shared/types/quiz';

export const quizDefaultData: Quiz = {
  language: {
    question: 'What is your preferred language?',
    answer: '',
    type: 'single-select',
  },
  gender: {
    question: 'What gender do you identify with?',
    answer: '',
    type: 'single-select-image',
  },
  age: {
    question: 'What is your age?',
    answer: '',
    type: 'single-select',
  },
  hate: {
    question: 'What do you hate the most in a book?',
    answer: '',
    type: 'multiple-select',
  },
  topics: {
    question: 'What are your favorite topics?',
    answer: '',
    type: 'bubble',
  },
  email: {
    question: 'Email',
    answer: '',
    type: 'email',
  },
};

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
    value: '18-29',
    translateValue: '18-29',
  },
  {
    value: '30-39',
    translateValue: '30-39',
  },
  {
    value: '40-49',
    translateValue: '40-49',
  },
  {
    value: '50+',
    translateValue: '50',
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
  },
  {
    image: '/action.png',
    value: 'Action',
    translateValue: 'action',
  },
  {
    image: '/royalObsession.png',
    value: 'Royal Obsession',
    translateValue: 'royalObsession',
  },
  {
    image: '/romance.png',
    value: 'Romance',
    translateValue: 'romance',
  },
  {
    image: '/youngAdult.png',
    value: 'Young Adult',
    translateValue: 'youngAdult',
  },
  {
    image: '/badBoy.png',
    value: 'Bad Boy',
    translateValue: 'badBoy',
  },
  {
    image: '/billionaire.png',
    value: 'Billionaire',
    translateValue: 'billionaire',
  },
];

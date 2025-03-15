import { Quiz } from '@/shared/types/quiz';

export const quizDefaultData: Quiz = {
  language: {
    order: 1,
    title: 'What is your preferred language?',
    type: 'single-select',
    answer: '',
  },
  gender: {
    order: 2,
    title: 'What gender do you identify with?',
    type: 'single-select-image',
    answer: '',
  },
  age: {
    order: 3,
    title: 'What is your age?',
    type: 'single-select',
    answer: '',
  },
  hate: {
    order: 4,
    title: 'What do you hate the most in a book?',
    type: 'multiple-select',
    answer: '',
  },
  topics: {
    order: 5,
    title: 'What are your favorite topics?',
    type: 'bubble',
    answer: '',
  },
  email: {
    order: 6,
    title: 'Email',
    type: 'email',
    answer: '',
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

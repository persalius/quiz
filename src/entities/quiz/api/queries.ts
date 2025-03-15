import { Quiz } from '@/shared/types/quiz';

async function mockFetchQuiz() {
  return new Promise((resolve) => {
    const data = localStorage.getItem('quiz') || '{}';
    const quiz = JSON.parse(data);
    resolve(quiz);
  });
}

async function mockUpdateQuiz(quiz: Partial<Quiz>) {
  return new Promise((resolve) => {
    const data = localStorage.getItem('quiz') || '{}';
    const oldQuiz = JSON.parse(data);
    const newQuiz = { ...oldQuiz, ...quiz };

    localStorage.setItem('quiz', JSON.stringify(newQuiz));
    resolve(newQuiz);
  });
}

async function mockClearQuiz() {
  return new Promise((resolve) => {
    localStorage.removeItem('quiz');
    resolve({});
  });
}

export async function getQuiz() {
  try {
    const data = (await mockFetchQuiz()) as unknown as Quiz;
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching: ${error.message}`);
    }
    throw new Error('Error fetching');
  }
}

export async function updateQuiz(quiz: Partial<Quiz>) {
  try {
    const data = await mockUpdateQuiz(quiz);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        `Error while saving: ${error.message}. Please try again.`
      );
    }
    throw new Error('Error while saving. Please try again.');
  }
}

export async function clearQuiz() {
  try {
    const data = await mockClearQuiz();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        `Error while cleaning: ${error.message}. Please try again.`
      );
    }
    throw new Error('Error while cleaning. Please try again.');
  }
}

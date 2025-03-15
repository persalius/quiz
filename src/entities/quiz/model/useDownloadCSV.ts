import Papa from 'papaparse';
import { useGetQuiz } from '../api/hooks';
import { QuizElement } from '@/shared/types/quiz';

const handleDownloadCSV = (data: QuizElement[]) => {
  const csv = Papa.unparse(data);

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });

  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'quiz.csv';
  link.click();

  URL.revokeObjectURL(link.href);
};

export const useDownloadCSV = () => {
  const { data } = useGetQuiz();

  const onDownloadCSV = () => {
    if (data) {
      handleDownloadCSV(Object.values(data));
    }
  };

  return { onDownloadCSV };
};

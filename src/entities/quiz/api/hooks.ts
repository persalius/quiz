import { useMutation, useQuery } from '@tanstack/react-query';
import { queryClient } from '@/app/providers/queryProvider';
import { clearQuiz, getQuiz, updateQuiz } from './queries';

export const useGetQuiz = () => {
  return useQuery({
    queryKey: ['quiz'],
    queryFn: getQuiz,
    retry: 1,
  });
};

export const useUpdateQuiz = ({ onSuccess }: { onSuccess?: () => void }) => {
  return useMutation({
    mutationFn: updateQuiz,
    onSuccess: (data) => {
      queryClient.setQueryData(['quiz'], data);
      onSuccess?.();
    },
  });
};

export const useClearQuiz = ({ onSuccess }: { onSuccess: () => void }) => {
  return useMutation({
    mutationFn: clearQuiz,
    onSuccess: (data) => {
      queryClient.setQueryData(['quiz'], data);
      onSuccess();
    },
  });
};

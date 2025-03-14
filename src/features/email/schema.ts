import { useTranslations } from 'next-intl';
import { z } from 'zod';

export const useSchema = () => {
  const t = useTranslations('Email');

  const schema = z.object({
    email: z.string().email({ message: t('invalidEmail') }),
  });

  return schema;
};

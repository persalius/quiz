import { z } from 'zod';

export const schema = z.object({
  email: z.string().email({ message: 'Invalid email' }),
});

export type FormType = z.infer<typeof schema>;

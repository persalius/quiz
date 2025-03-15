import { z } from 'zod';

export const schema = z.object({
  selected: z.array(z.string()).min(1, 'At least one option must be selected'),
});

export type FormType = z.infer<typeof schema>;

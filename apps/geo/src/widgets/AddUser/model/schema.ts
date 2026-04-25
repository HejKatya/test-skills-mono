import { z } from 'zod';

export const addUserSchema = z.object({
  name: z.string().min(1, 'Введите имя'),
  age: z.preprocess(
    (value) => {
      if (value === '' || value === null || value === undefined) {
        return undefined;
      }
      return Number(value);
    },
    z
      .number({
        error: 'Введите возраст',
      })
      .min(1, 'Возраст должен быть больше 0'),
  ),
});

export type AddUserDto = z.infer<typeof addUserSchema>;

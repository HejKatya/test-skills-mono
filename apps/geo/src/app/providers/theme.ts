import { createEvent, createStore } from 'effector';

export type Theme = 'light' | 'dark';

// export type Theme = 'light' | 'dark'

// событие переключения
export const toggleTheme = createEvent();

// стор темы
export const $theme = createStore<Theme>('light').on(toggleTheme, (theme) =>
  theme === 'light' ? 'dark' : 'light',
);
// TODO: написать переключение тем на effector,
// для персиста использовать
// https://github.com/yumauri/effector-storage

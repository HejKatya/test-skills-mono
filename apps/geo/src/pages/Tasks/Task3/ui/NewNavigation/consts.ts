import type { NavItem } from './types';

// чтобы элемент навигации корректно рендерился, нужно добавить соответствующие страницы (замокать)
// и добавить их в роутере
const items: NavItem[] = [
  {
    label: 'Исходные данные',
    children: [
      {
        label: 'Исходные данные',
        children: [
          { label: 'По прибытию', to: { name: 'source-data' } },
          { label: 'По прибытию поквартально', to: { name: 'source-data-quarterly' } },
        ],
      },

      {
        label: 'Макропоказатели',
        children: [
          { label: 'Показатель 1', to: { name: 'macro-indicator-1' } },
          { label: 'Показатель 2', to: { name: 'macro-indicator-2' } },
        ],
      },
      {
        label: 'Заявки грузоотправителей',
        to: { name: 'shipment-requests' },
      },
      {
        label: 'Прогнозные данные',
        to: { name: 'forecast-data' },
      },
      {
        label: 'Общие уровни',
        to: { name: 'general-levels' },
      },
      {
        label: 'Контейнерные перевозки',
        to: { name: 'container-transports' },
      },
      {
        label: 'Порты и погранпереходы',
        to: { name: 'ports' },
      },
      {
        label: 'Междорожные корреспонденции',
        to: { name: 'intermodal-communications' },
      },
    ],
  },

  {
    label: 'Справочники',
    children: [
      { label: 'Станции', to: { name: 'station' } },
      { label: 'Компании', to: { name: 'companies' } },
      { label: 'Грузы', to: { name: 'cargo' } },
      {
        label: 'Правила погрузки',
        children: [
          { label: '№1 ст. Экспорт', to: { name: 'load-rule', params: { id: '1' } } },
          { label: '№2 ст. Внутренние', to: { name: 'load-rule', params: { id: '2' } } },
          { label: '№3 ст. Припорт.', to: { name: 'load-rule', params: { id: '3' } } },
        ],
      },
    ],
  },
  {
    label: 'Администрирование',
    children: [
      { label: 'Пользователи', to: { name: 'users' } },
      { label: 'Журнал аудита', to: { name: 'audit' } },
    ],
  },
];

export default items;

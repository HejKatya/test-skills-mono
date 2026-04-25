import { toggleTheme } from 'src/app/providers/theme';

export const getToolbarItems = (theme: 'light' | 'dark') => [
  { id: 'search', icon: 'i-toolbar:search', onClick: () => console.log('search') },
  { id: 'history', icon: 'i-toolbar:history', onClick: () => console.log('history') },
  { id: 'map', icon: 'i-toolbar:map', onClick: () => console.log('map') },
  { id: 'layers', icon: 'i-toolbar:layers', onClick: () => console.log('layers') },
  { id: 'train', icon: 'i-toolbar:train-track', onClick: () => console.log('train') },
  { id: 'earth', icon: 'i-toolbar:earth', onClick: () => console.log('earth') },
  {
    id: 'theme',
    icon: theme === 'light' ? 'i-toolbar:sun' : 'i-toolbar:moon',
    onClick: () => toggleTheme(),
  },
  { id: 'folders', icon: 'i-toolbar:folders', onClick: () => console.log('folders') },
  { id: 'bookmark', icon: 'i-toolbar:bookmark', onClick: () => console.log('bookmark') },
  { id: 'download', icon: 'i-toolbar:download', onClick: () => console.log('download') },
];

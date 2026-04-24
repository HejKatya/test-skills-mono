import { toggleTheme } from 'src/app/providers/theme';
import bookmarkIcon from 'src/shared/assets/icons/toolbar/bookmark.svg';
import downloadIcon from 'src/shared/assets/icons/toolbar/download.svg';
import earthIcon from 'src/shared/assets/icons/toolbar/earth.svg';
import foldersIcon from 'src/shared/assets/icons/toolbar/folders.svg';
import historyIcon from 'src/shared/assets/icons/toolbar/history.svg';
import layersIcon from 'src/shared/assets/icons/toolbar/layers.svg';
import mapIcon from 'src/shared/assets/icons/toolbar/map.svg';
import moonIcon from 'src/shared/assets/icons/toolbar/moon.svg';
import searchIcon from 'src/shared/assets/icons/toolbar/search.svg';
import sunIcon from 'src/shared/assets/icons/toolbar/sun.svg';
import trainIcon from 'src/shared/assets/icons/toolbar/train-track.svg';

export const getToolbarItems = (theme: 'light' | 'dark') => [
  { id: 'search', icon: searchIcon, onClick: () => console.log('search') },
  { id: 'history', icon: historyIcon, onClick: () => console.log('history') },
  { id: 'map', icon: mapIcon, onClick: () => console.log('map') },
  { id: 'layers', icon: layersIcon, onClick: () => console.log('layers') },
  { id: 'train', icon: trainIcon, onClick: () => console.log('train') },
  { id: 'earth', icon: earthIcon, onClick: () => console.log('earth') },
  {
    id: 'theme',
    icon: theme === 'light' ? sunIcon : moonIcon,
    onClick: toggleTheme,
  },
  { id: 'folders', icon: foldersIcon, onClick: () => console.log('folders') },

  { id: 'bookmark', icon: bookmarkIcon, onClick: () => console.log('bookmark') },
  { id: 'download', icon: downloadIcon, onClick: () => console.log('download') },
];

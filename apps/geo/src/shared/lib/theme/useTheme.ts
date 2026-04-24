import { ref } from 'vue';
import { $theme } from 'src/app/providers/theme';

export function useTheme() {
  const theme = ref($theme.getState());

  $theme.watch((t) => {
    theme.value = t;
  });

  return theme;
}

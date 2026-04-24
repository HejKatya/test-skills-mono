import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query';

export const queryClient = new QueryClient();

export const queryProvider = {
  install(app: any) {
    app.use(VueQueryPlugin, {
      queryClient,
    });
  },
};

import '../src/app.scss';
import '../src/pages/root/root.scss';
import '../src/pages/stories/stories.scss';
import { icon } from "../src/components/icons";
import { app } from '@storybook/vue3';

app.component('icon', icon);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    }
  }
}
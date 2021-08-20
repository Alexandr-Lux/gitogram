import '../src/app.scss';
import '../src/views/root/root.scss';
import '../src/views/stories/stories.scss';
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
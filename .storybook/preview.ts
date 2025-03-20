import type { Preview } from "@storybook/react";
import "app/styles/storybook.scss";

const preview: Preview = {
  parameters: {
    options: {
      //@ts-ignore
      storySort: (a, b) =>
        a.id === b.id
          ? 0
          : a.id.localeCompare(b.id, undefined, { numeric: true }),
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

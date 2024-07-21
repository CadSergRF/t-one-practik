import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "../../../store/store";
import { Meta, StoryObj } from "@storybook/react";

import { NavigationMenu } from "./NavigationMenu";

import "../../../assets/styles/index.css";

const meta = {
  component: NavigationMenu,
} satisfies Meta<typeof NavigationMenu>;

export default meta;

type Story = StoryObj<typeof NavigationMenu>;

export const Primary: Story = {
  args: {
    sbLoggedIn: false,
  },
  argTypes: {
    location: {
      options: ["Header", "Footer"],
      control: { type: "radio" },
    },
    sbCounter: {
      control: {
        type: "range",
        min: 0,
        max: 5,
        step: 1,
      },
    },
  },
  parameters: {
    backgrounds: {
      default: "header",
      values: [
        { name: "header", value: "#484283" },
        { name: "footer", value: "#444b58" },
      ],
    },
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <Provider store={setupStore()}>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </Provider>
    ),
  ],
};

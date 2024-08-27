import { Meta, StoryObj } from "@storybook/react";

import { AddedButton } from "./AddedButton";

import styles from "./AddedButton.module.css";
import "../../../assets/styles/index.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "../../../store/store";

const meta = {
  component: AddedButton,
} satisfies Meta<typeof AddedButton>;

export default meta;

type Story = StoryObj<typeof AddedButton>;

export const Primary: Story = {
  args: {
    disabled: false,
    hover: false,
    location: "PlusButton",
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

export const Buttons = () => (
  <Provider store={setupStore()}>
    <BrowserRouter>
      <div className={styles.sb__wrapper}>
        <AddedButton
          id="one"
          location="AddButton"
          handler={() => console.log("AddButton")}
        />
        <p>Default</p>
        <AddedButton
          id="two"
          location="AddButton"
          handler={() => console.log("AddButton")}
          disabled={true}
        />
        <p>Disabled</p>
        <AddedButton
          id="three"
          hover={true}
          location="AddButton"
          handler={() => console.log("AddButton")}
        />
        <p>Hover</p>
      </div>
    </BrowserRouter>
  </Provider>
);

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "../../../store/store";
import { Meta, StoryObj } from "@storybook/react";

import { CatalogItem } from "./CatalogItem";

import styles from "./CatalogItem.module.css";
import '../../../assets/styles/index.css';

import { cardStories } from "./Card.sb";

const meta = {
  component: CatalogItem,
} satisfies Meta<typeof CatalogItem>;

export default meta;

type Story = StoryObj<typeof CatalogItem>;

export const Primary: Story = {
  args: {
    small: false,
    sbCart: false,
    sbQuantity: 3,
    item: cardStories,
  },
  decorators: [
    (Story) => (
      <Provider store={setupStore()}>
        <BrowserRouter>
          <ul className={styles.sb__list}>
            <Story />
          </ul>
        </BrowserRouter>
      </Provider>
    ),
  ],
};

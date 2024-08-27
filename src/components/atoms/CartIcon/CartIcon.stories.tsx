import { Meta, StoryObj } from "@storybook/react";
import clsx from "clsx";

import { CartIcon } from "./CartIcon";

import styles from "./CartIcon.module.css";

const meta = {
  component: CartIcon,
} satisfies Meta<typeof CartIcon>;

export default meta;

type Story = StoryObj<typeof CartIcon>;

export const Primary: Story = {
  argTypes: {
    counter: {
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
  },
};

export const CartIcons = () => (
  <div className={clsx(styles.sb__wrapper, styles.sb__bgc)}>
    <CartIcon counter={0} />
    <p className={styles.sb__mp}>Empty cart</p>
    <CartIcon counter={3} />
    <p className={styles.sb__mp}>Filled cart</p>
  </div>
);

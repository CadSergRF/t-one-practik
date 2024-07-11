import { Meta, StoryObj } from "@storybook/react";
import clsx from "clsx";

import { Rating } from "./Rating";

import styles from "./Rating.module.css";
import "../../../assets/styles/index.css";

const meta = {
  component: Rating,
} satisfies Meta<typeof Rating>;

export default meta;

type Story = StoryObj<typeof Rating>;

export const Primary: Story = {
  argTypes: {
    rating: {
      control: {
        type: "range",
        min: 0,
        max: 5,
        step: 1,
      },
    },
  },
};

export const Ratings = () => (
  <div className={clsx(styles.sb__wrapper, styles.sb__bgc)}>
    <Rating rating={0} />
    <p className={styles.sb__mp}>Don't even think about it</p>
    <Rating rating={3} />
    <p className={styles.sb__mp}>Not bad</p>
    <Rating rating={5} />
    <p className={styles.sb__mp}>WoW</p>
  </div>
);

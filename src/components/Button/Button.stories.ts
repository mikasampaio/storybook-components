import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";
import { ButtonProps } from "./types";

const meta = {
  title: "Design/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    onClick: {
      action: "clicked",
    },
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  } as ButtonProps,
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    label: "Small",
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    label: "Medium",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    label: "Large",
    size: "large",
  },
};

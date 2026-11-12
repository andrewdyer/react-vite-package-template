import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import Button from './Button';

/**
 * The Storybook metadata for {@link Button}, which centres it on the canvas, generates its docs
 * page, and records clicks in the Actions panel for every story.
 */
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

/**
 * Describes a story for {@link Button}, with its args checked against {@link meta}.
 */
type Story = StoryObj<typeof meta>;

/**
 * The story showing {@link Button} with only the shared click recorder from {@link meta}.
 */
export const Default: Story = {};

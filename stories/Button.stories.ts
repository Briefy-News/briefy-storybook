import Button from '../src/Button'

export default {
  title: 'BaseStyle/Button',
  component: Button,
  tags: ['autodocs'],
}

export const Primary = {
  args: {
    title: 'button',
    size: 'big',
    type: 'lineBlue',
    onClick: () => alert('클릭!'),
  },
  argTypes: {
    type: {
      options: ['lineBlue', 'lineBlack', 'blue', 'black', 'disabled'],
      control: { type: 'radio' },
    },
    size: {
      options: ['big', 'small'],
      control: { type: 'radio' },
    },
  },
}

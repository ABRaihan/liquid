import ChevronIcon from '../../assets/icons/ChevronIcon';

export default {
  title: 'AtomComponents/Icons',
  component: ChevronIcon,
};

// const ChevronTemplate = (args) => <ChevronIcon {...args} />;

export const Chevron = ChevronIcon.bind({});

Chevron.args = {
  width: 16,
  height: 7,
  direction: 'bottom',
};

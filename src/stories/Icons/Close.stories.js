import CloseIcon from '../../assets/icons/CloseIcon';

export default {
  title: 'AtomComponents/Icons',
  component: CloseIcon,
};

// const CloseTemplate = (args) => <CloseIcon {...args} />;

export const Close = CloseIcon.bind({});

Close.args = {
  width: 20,
  height: 20,
};

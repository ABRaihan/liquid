import CloseIcon from '../../assets/icons/CloseIcon';

export default {
  title: 'AtomComponent/Icons',
  component: CloseIcon,
};

// const CloseTemplate = (args) => <CloseIcon {...args} />;

export const Close = CloseIcon.bind({});

Close.args = {
  width: 20,
  height: 20,
  color: '#1e272e',
};

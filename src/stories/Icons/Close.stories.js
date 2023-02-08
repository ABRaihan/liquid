import CloseIcon from '../../assets/icons/CloseIcon';

export default {
  title: 'Icons',
  component: CloseIcon,
};

const CloseTemplate = (args) => <CloseIcon {...args} />;

export const Close = CloseTemplate.bind({});

Close.args = {
  width: 20,
  height: 20,
};

import VisibilityIcon from '../../assets/icons/VisibilityIcon';

export default {
  title: 'AtomComponents/Icons',
  component: VisibilityIcon,
};

// const VisibilityTemplate = (args) => <VisibilityIcon {...args} />;
export const Visibility = VisibilityIcon.bind({});
Visibility.args = {
  visible: false,
};

import VisibilityIcon from '../../assets/icons/VisibilityIcon';

export default {
  title: 'Icons',
  component: VisibilityIcon,
  argTypes: { changeVisible: { action: 'changeVisible' } },
};

const VisibilityTemplate = (args) => <VisibilityIcon {...args} />;
export const Visibility = VisibilityTemplate.bind({});
Visibility.args = {
  visible: false,
};

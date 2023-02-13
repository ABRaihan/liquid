import UserIcon from '../../assets/icons/UserIcon';

export default {
  title: 'UI/Icons',
  component: UserIcon,
};

export const User = UserIcon.bind({});

User.args = {
  width: 22,
  height: 16.5,
  active: false,
};

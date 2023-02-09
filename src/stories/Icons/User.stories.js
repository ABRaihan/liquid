import UserIcon from '../../assets/icons/UserIcon';

export default {
  title: 'AtomComponent/Icons',
  component: UserIcon,
};

export const User = UserIcon.bind({});

User.args = {
  width: 22,
  height: 16.5,
  fill: false,
};

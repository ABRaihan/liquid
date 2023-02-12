import CheckIcon from '../../assets/icons/CheckIcon';

export default {
  title: 'UI/Icons',
  component: CheckIcon,
};

export const Check = CheckIcon.bind({});

Check.args = {
  width: 10,
  height: 7,
};

import HamburgerIcon from '../../assets/icons/HamburgerIcon';

export default {
  title: 'AtomComponent/Icons',
  component: HamburgerIcon,
};

// const HamburgerTemplate = (args) => <HamburgerIcon {...args} />;

export const Hamburger = HamburgerIcon.bind({});
Hamburger.args = {
  rotate: false,
};

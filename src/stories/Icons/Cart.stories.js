import CartIcon from '../../assets/icons/CartIcon';

export default {
  title: 'UI/Icons',
  component: CartIcon,
};

export const Cart = CartIcon.bind({});

Cart.args = {
  width: 19.509,
  height: 20,
  inCart: false,
};

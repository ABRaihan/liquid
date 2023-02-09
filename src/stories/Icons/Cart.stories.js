import CartIcon from '../../assets/icons/CartIcon';
import { secondaryColor } from '../../components/styled/utils/variables';

export default {
  title: 'AtomComponent/Icons',
  component: CartIcon,
};

export const Cart = CartIcon.bind({});

Cart.args = {
  width: 19.509,
  height: 20,
  color: secondaryColor,
};

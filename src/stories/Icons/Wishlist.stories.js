import WishlistIcon from '../../assets/icons/WishlistIcon';

export default {
  title: 'AtomComponent/Icons',
  component: WishlistIcon,
};

export const Wishlist = WishlistIcon.bind({});

Wishlist.args = {
  width: 20,
  height: 20,
  inWishlist: false,
};

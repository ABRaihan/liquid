import WishlistIcon from '../../assets/icons/WishlistIcon';

export default {
  title: 'UI/Icons',
  component: WishlistIcon,
};

export const Wishlist = WishlistIcon.bind({});

Wishlist.args = {
  width: 20,
  height: 20,
  inWishlist: false,
};

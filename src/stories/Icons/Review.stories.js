import ReviewIcon from '../../assets/icons/ReviewIcon';

export default {
  title: 'AtomComponent/Icons',
  component: ReviewIcon,
  argTypes: {
    review: {
      control: { type: 'number', min: 0, max: 1, step: 0.1 },
    },
  },
};

export const Review = ReviewIcon.bind({});

Review.args = {
  review: 0,
};

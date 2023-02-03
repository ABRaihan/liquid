import VisibilityIcon from '../../assets/icon/VisibilityIcon';

export default {
  title: 'Icons',
  component: VisibilityIcon,
};

const VisibilityTemplate = (args) => <VisibilityIcon {...args} />;
export const Visibility = VisibilityTemplate.bind({});
Visibility.args = {
  visible: false,
};

const prevArray = [
  {
    id: 1,
    name: 'test',
    roll: '001',
  },
  {
    id: 2,
    name: 'fine',
    roll: '002',
  },
  {
    id: 3,
    name: 'oke',
    roll: '003',
  },
];

const nextArray = [
  {
    id: 1,
    name: 'Sweet',
    roll: '001',
  },
];

const update = prevArray.map((prevItem) => {
  const updateItem = nextArray.find((nextItem) => nextItem.id === prevItem.id);
  return updateItem || prevItem;
});

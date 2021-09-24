import { Constants } from '../assets/Constants';

export const getAnimationProps = (scrollY: any, index: number) => {
  const inputRange = [
    -1,
    0,
    Constants.ITEM_SIZE * index,
    Constants.ITEM_SIZE * (index + 2),
  ];

  const opacityInputRange = [
    -1,
    0,
    Constants.ITEM_SIZE * index,
    Constants.ITEM_SIZE * (index + 1),
  ];

  const scale = scrollY.interpolate({
    inputRange,
    outputRange: [1, 1, 1, 0],
  });

  const opacity = scrollY.interpolate({
    inputRange: opacityInputRange,
    outputRange: [1, 1, 1, 0],
  });

  console.log('opacity=>', opacity);

  return [scale, opacity];
};

import React, { useRef } from 'react';
import { TouchableOpacity, Animated } from 'react-native';
import { IComic } from '../../interfaces/IComic';

import { Image, ContentCard, Title } from './styles';

import { Constants } from '../../../../assets/Constants';
import { getAnimationProps } from '../../../../helpers/animation';

const ListItem: React.FC<IComic> = (
  { ...item },
  index: number,
  scrollY: any
) => {
  return (
    <TouchableOpacity>
      <Animated.View
        style={{
          flexDirection: 'row',
          padding: Constants.SPACING,
          marginBottom: Constants.SPACING,
          backgroundColor: 'rgba(255,255,255,0.9)',
          borderRadius: 16,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 10,
          },
          opacity,
          shadowOpacity: 0.3,
          shadowRadius: 20,
          transform: [{ scale }],
        }}
      >
        <ContentCard>
          <Image
            source={{ uri: item?.thumbnail?.path + '.jpg' }}
            resizeMode="cover"
          />

          <Title>{item?.title}</Title>
        </ContentCard>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default ListItem;

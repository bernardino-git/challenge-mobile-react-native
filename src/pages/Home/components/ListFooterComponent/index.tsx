import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container } from './styles';

const ListFooterComponent: React.FC = () => {
  return (
    <Container>
      <ActivityIndicator size="large" color="#202020" />
    </Container>
  );
};

export default ListFooterComponent;

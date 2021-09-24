import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Provider } from 'react-redux';
import { Container, Header, Logo } from './src/styles/AppStyle';

import Routes from './src/routes/Routes';
import store from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <Container>
        <StatusBar backgroundColor="#202020" />
        <Header>
          <Logo
            source={require('./src/assets/images/marvel-logo.png')}
            resizeMode="contain"
          />
        </Header>
        <Image
          source={require('./src/assets/images/animation.gif')}
          style={StyleSheet.absoluteFillObject}
          blurRadius={80}
        />
        <Routes />
      </Container>
    </Provider>
  );
}

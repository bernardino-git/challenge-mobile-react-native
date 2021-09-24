import React, { useState, useEffect } from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { IComic } from '../Home/interfaces/IComic';
import { ICreators } from './interfaces/ICreators';
import { getComicById, getCreatorsFromCharacter } from './services/getComic';

import {
  Container,
  TextDescription,
  TextTitle,
  TextTitle2,
  ViewImageInfo,
  ViewTextDescription,
  ViewTextInfo,
  ViewTotal,
} from './styles';

export default function Details({ navigation }: { navigation: any }) {
  const [comic, setComic] = useState<IComic[]>([]);
  const [creators, setCreators] = useState([]);
  const character = navigation.getParam('comic');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadComic() {
      const comic = await getComicById(character.id);

      const responseCreators = await getCreatorsFromCharacter(character.id);

      setComic(comic.data.data.results);
      setCreators(responseCreators.data.data.results);
      setLoading(false);
    }

    loadComic();
  }, []);

  return (
    <ImageBackground
      source={require('../../assets/images/fundo-vingadores.jpg')}
      style={{ width: '100%', height: '100%' }}
    >
      <Container>
        <StatusBar backgroundColor="#202020" barStyle="light-content" />
        <Header>
          <Image
            source={require('../../assets/images/marvel-logo.png')}
            resizeMode="contain"
          />
        </Header>
        {loading ? (
          <ActivityIndicator
            size="large"
            style={{ marginTop: 300 }}
            color="#FFF"
          />
        ) : (
          <ViewTotal>
            {comic.map((provider) => (
              <TextTitle numberOfLines={1}>{provider.title}</TextTitle>
            ))}
            <ViewImageInfo>
              {comic.map((provider) => (
                <Image
                  style={{
                    flex: 1,
                    width: 230,
                    height: 310,
                    margin: 30,
                  }}
                  resizeMode="contain"
                  source={{ uri: provider.thumbnail.path + '.jpg' }}
                />
              ))}
              <ViewTextInfo>
                <TextTitle2>Writer:</TextTitle2>
                {creators.map((provider: ICreators) => (
                  <Text style={{ color: '#FFF', fontSize: 14 }}>
                    {provider.firstName}
                  </Text>
                ))}
              </ViewTextInfo>
            </ViewImageInfo>
            <ViewTextDescription>
              {comic.map((provider) => (
                <TextDescription>{provider.description}</TextDescription>
              ))}
            </ViewTextDescription>
          </ViewTotal>
        )}
      </Container>
    </ImageBackground>
  );
}

Details.navigationOptions = ({ navigation }: { navigation: any }) => ({
  title: '',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Home');
      }}
    >
      <Icon
        name="chevron-left"
        size={40}
        color="#FFF"
        style={{ marginTop: 6 }}
      />
    </TouchableOpacity>
  ),
});

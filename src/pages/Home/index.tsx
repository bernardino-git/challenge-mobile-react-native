import React, { useEffect, useRef, useState } from 'react';
import { Image, TouchableOpacity, Animated, Text } from 'react-native';

import ListFooterComponent from './components/ListFooterComponent';
import { IComic } from './interfaces/IComic';
import { getAllComics } from './services/getComic';

import { Constants } from '../../assets/Constants';
import { getAnimationProps } from '../../helpers/animation';
import { ContentCard, Title } from './styles';
import { ApplicationState } from '../../store';
import { bindActionCreators, Dispatch } from 'redux';
import * as ComicsActions from '../../store/ducks/comics/actions';
import { connect } from 'react-redux';

interface StateProps {
  repositories: IComic[]
}

interface DispatchProps {
  loadRequest(): void
}

type Props = StateProps & DispatchProps

const Home: React.FC<Props> = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const [comics, setComics] = useState<IComic[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const loadData = async () => {
    const allComics = await getAllComics(currentPage);

    setComics(allComics.data.data.results);
  };

  useEffect(() => {
    loadData();
  }, [currentPage]);

  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };

  const ListItem = ({ item, index }: { item: IComic; index: number }) => (
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
          opacity: getAnimationProps(scrollY, index)[1],
          shadowOpacity: 0.3,
          shadowRadius: 20,
          transform: [{ scale: getAnimationProps(scrollY, index)[0] }],
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

  return (
    <Animated.FlatList
      data={comics}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true }
      )}
      contentContainerStyle={{
        padding: Constants.SPACING,
        paddingTop: 42,
      }}
      keyExtractor={(item) => String(item.id)}
      renderItem={ListItem}
      ListFooterComponent={ListFooterComponent}
      onEndReached={loadMoreItem}
      onEndReachedThreshold={0}
      ListEmptyComponent={
        <Text style={{ textAlign: 'center', padding: 30 }}>No Data</Text>
      }
    />
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.comics.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(ComicsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);



import React, { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { invalidateFetchAnimeByStatusQueries, useFetchAnimeByStatus } from '../hooks/useFetchAnime';
import * as CommonUtil from '../utils/CommonUtil';
import { useQueryClient } from 'react-query';
import DefaultWrapper from '../components/wrappers/DefaultWrapper';
import AnimeListItem from '../components/common/AnimeListItem';
import EmptyView from '../components/common/EmptyView';
import SearchBarComponent from '../components/common/SearchBarComponent';
import ScreenNames from '../constants/ScreenNames';
import { useAddToFavoriteList, useRemoveToFavoriteList } from '../hooks/useMutateAnime';
import { addToFavoriteList, removeFromFavoriteList } from '../redux/favorites/actions';
import ReduxActionTypes from '../constants/ReduxActionTypes';
import { useDispatch } from 'react-redux';

const MainScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const animeStatus = CommonUtil.getAnimeStatusByScreenKey(route.name);

  const [searchQuery, setSearchQuery] = useState('');

  const { data, fetchNextPage, hasNextPage, isRefetching, isLoading } = useFetchAnimeByStatus(
    animeStatus,
    searchQuery,
  );

  const invalidateFetchAnimeByStatusCache = useCallback(() => {
    invalidateFetchAnimeByStatusQueries(animeStatus);
  }, []);

  const onPressItem = (item) => {
    navigation.navigate(ScreenNames.DetailScreen.key, {
      itemId: item.id,
    });
  };

  const onPressFavorite = useCallback(
    (item, isRemove = false) => {
      if (isRemove) {
        dispatch({ type: ReduxActionTypes.REMOVE_FROM_FAVORITES, item: JSON.stringify(item) });
      } else {
        dispatch({ type: ReduxActionTypes.ADD_TO_FAVORITES, item: JSON.stringify(item) });
      }
    },
    [dispatch],
  );

  const items = data || [];
  return (
    <DefaultWrapper>
      <FlatList
        data={items}
        extraData={items || isLoading || isRefetching}
        renderItem={({ item }) => (
          <AnimeListItem
            {...item}
            onPress={() => onPressItem(item)}
            onPressFavorite={(item, isRemove) => onPressFavorite(item, isRemove)}
          />
        )}
        keyExtractor={(item, index) => `${item.id}${index}`}
        onEndReachedThreshold={0.5}
        onEndReached={hasNextPage ? () => fetchNextPage() : undefined}
        onRefresh={invalidateFetchAnimeByStatusCache}
        refreshing={false}
        ListEmptyComponent={<EmptyView isLoading={isLoading} />}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={
          <SearchBarComponent
            id={`search${route.name}`}
            isLoading={isLoading}
            label={'Search'}
            onChangeText={(text) => setSearchQuery(text)}
          />
        }
      />
    </DefaultWrapper>
  );
};

export default MainScreen;

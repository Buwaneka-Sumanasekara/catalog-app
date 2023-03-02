import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useFetchAnimeByStatus } from '../hooks/useFetchAnime';
import * as CommonUtil from '../utils/CommonUtil';
import DefaultWrapper from '../components/wrappers/DefaultWrapper';
import AnimeListItem from '../components/common/AnimeListItem';
import EmptyView from '../components/common/EmptyView';
import SearchBarComponent from '../components/common/SearchBarComponent';
import ScreenNames from '../constants/ScreenNames';
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

  const onPressItem = (item) => {
    navigation.navigate(ScreenNames.DetailScreen.key, {
      itemId: item.id,
    });
  };

  const items = data || [];
  return (
    <DefaultWrapper>
      <FlatList
        data={items}
        extraData={items || isLoading || isRefetching}
        renderItem={({ item }) => <AnimeListItem {...item} onPress={() => onPressItem(item)} />}
        keyExtractor={(item, index) => `${item.id}${index}`}
        onEndReachedThreshold={0.5}
        onEndReached={hasNextPage ? () => fetchNextPage() : undefined}
        ListEmptyComponent={<EmptyView isFlatList={true} isLoading={isLoading} />}
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

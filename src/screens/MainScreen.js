import React, { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Text } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import { invalidateFetchAnimeByStatusQueries, useFetchAnimeByStatus } from '../hooks/useFetchAnime';
import * as CommonUtil from '../utils/CommonUtil';
import { useQueryClient } from 'react-query';
import DefaultWrapper from '../components/wrappers/DefaultWrapper';
import AnimeListItem from '../components/common/AnimeListItem';
import EmptyView from '../components/common/EmptyView';
import SearchBarComponent from '../components/common/SearchBarComponent';
import { useDebounce } from '../hooks/useFetchCommon';
import Globals from '../constants/Globals';

const MainScreen = () => {
  const route = useRoute();

  const animeStatus = CommonUtil.getAnimeStatusByScreenKey(route.name);

  const [searchQuery, setSearchQuery] = useState('');


  const { data, fetchNextPage, hasNextPage, isRefetching, isLoading } = useFetchAnimeByStatus(
    animeStatus,
    searchQuery,
  );

  const invalidateFetchAnimeByStatusCache = useCallback(() => {
    invalidateFetchAnimeByStatusQueries(animeStatus);
  }, []);

  const items = data || [];

  return (
    <DefaultWrapper>
      <FlatList
        data={items}
        extraData={items || isLoading || isRefetching}
        renderItem={({ item }) => <AnimeListItem {...item} />}
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
          <SearchBarComponent id={`search${route.name}`} isLoading={isLoading} label={'Search'} onChangeText={(text) => setSearchQuery(text)} />
        }
      />
    </DefaultWrapper>
  );
};

export default MainScreen;

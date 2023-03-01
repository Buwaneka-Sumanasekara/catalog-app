import React, { useCallback } from 'react';
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

const MainScreen = () => {
  const route = useRoute();

  const animeStatus = CommonUtil.getAnimeStatusByScreenKey(route.name);

  const { data, fetchNextPage, hasNextPage, isRefetching, isLoading } =
    useFetchAnimeByStatus(animeStatus);
  const invalidateFetchAnimeByStatusCache = useCallback(() => {
    invalidateFetchAnimeByStatusQueries(animeStatus);
  }, []);

  const items = data || [];

  return (
    <DefaultWrapper>
      <FlatList
        data={items}
        extraData={items}
        renderItem={({ item }) => <AnimeListItem {...item} />}
        keyExtractor={(item) => item.id}
        onEndReachedThreshold={0.5}
        onEndReached={hasNextPage ? () => fetchNextPage() : undefined}
        onRefresh={invalidateFetchAnimeByStatusCache}
        refreshing={isRefetching}
        ListEmptyComponent={<EmptyView isLoading={isLoading} />}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </DefaultWrapper>
  );
};

export default MainScreen;

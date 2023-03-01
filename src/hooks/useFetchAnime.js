import { getAxios } from '../utils/AxiosUtil';
import Globals from '../constants/Globals';
import QueryKeys from '../constants/QueryKeys';
import { useInfiniteQuery, useQueryClient } from 'react-query';

const api = getAxios();

const getAnimeByStatus = async (query, status, page = 0) => {
  return await api.get('/anime', {
    params: {
      status: status,
      page: page,
      limit: Globals.ITEMS_PER_PAGE.HOME,
      q: query,
    },
  });
};

export const useFetchAnimeByStatus = (status = Globals.AnimeStatus.Airing, query = '') => {
  return useInfiniteQuery(
    [QueryKeys.ANIME_BY_STATUS, status, query],
    ({ pageParam }) => getAnimeByStatus(query, status, pageParam),
    {
      enabled: true,
      onError: (er) => {
        console.log(er.message);
      },
      getNextPageParam: (lastPage, pages) => {
        const hasNextPage = lastPage?.data?.pagination?.has_next_page || false;
        const currentPage = lastPage?.data?.pagination?.current_page || false;
        if (hasNextPage) {
          return currentPage + 1;
        } else {
          return 0;
        }
      },
      retry: 1,
      select: (data) =>
        (data?.pages || []).flatMap((x) => {
          return x.data.data.map((item) => ({ ...item, isFavorite: false, id: item.mal_id }));
        }),
    },
  );
};

export const invalidateFetchAnimeByStatusQueries = (status) => {
  const queryClient = useQueryClient();
  queryClient.invalidateQueries([QueryKeys.ANIME_BY_STATUS, status]);
};

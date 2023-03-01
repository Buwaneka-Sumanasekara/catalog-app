import { getAxios } from '../utils/AxiosUtil';
import Globals from '../constants/Globals';
import QueryKeys from '../constants/QueryKeys';

const api = getAxios();

const getAnimeByStatus = async (status, page = 0) => {
  return await api.get('/anime', {
    params: {
      status: status,
      page: page,
      limit: Globals.ITEMS_PER_PAGE.HOME,
    },
  });
};

export const useFetchAnimeByStatus = (status=Globals.AnimeStatus.Airing) => {
  return useInfiniteQuery(
    [QueryKeys.ANIME_BY_STATUS, status],
    ({
      pageParam,
    }) => getAnimeByStatus(status, pageParam),
    {
      enabled: true,
      getNextPageParam: (lastPage, pages) => {
        const hasNextPage = lastPage?.pagination?.has_next_page || false
        if (hasNextPage) {
          return lastPage?.pagination?.last_visible_page+1
        } else {
          return undefined
        }
      },
    },
  )
}

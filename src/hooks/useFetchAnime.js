import { getAxios } from '../utils/AxiosUtil';
import Globals from '../constants/Globals';
import QueryKeys from '../constants/QueryKeys';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import * as CommonUtil from "../utils/CommonUtil"

const api = getAxios();


//===========Start:Get Anime List===============
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

  const favoriteItems=useSelector(state=>state.favorites.items)


  return useInfiniteQuery(
    [QueryKeys.ANIME_BY_STATUS, status, query],
    ({ pageParam }) => getAnimeByStatus(query, status, pageParam),
    {
      enabled: true,
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
          return x.data.data.map((item) => ({ ...item, isFavorite:CommonUtil.checkValueExistInArray(item,favoriteItems,"mal_id") , id: item.mal_id }));
        }),
    },
  );
};

//===========Invalidate anime list===============
export const invalidateFetchAnimeByStatusQueries = (status) => {
  const queryClient = useQueryClient();
  queryClient.invalidateQueries([QueryKeys.ANIME_BY_STATUS, status]);
};


//===========Start:Get Anime By Id===============
const getAnimeById = async (id) => {
  return await api.get(`/anime/${id}`);
};


export const useFetchAnimeById = (id) => {
  const favoriteItems=useSelector(state=>state.favorites.items)
  return useQuery([QueryKeys.ANIME_BY_ID, id],
    ()=>getAnimeById(id),
    {
      select: data => {
        const anime = data?.data
        return {...anime,isFavorite:CommonUtil.checkValueExistInArray(anime,favoriteItems,"mal_id"),id:anime.mal_id}
      },
    })
}

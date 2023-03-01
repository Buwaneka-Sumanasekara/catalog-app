import { getAxios } from '../utils/AxiosUtil';
import Globals from '../constants/Globals';

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

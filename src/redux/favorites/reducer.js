import ReduxActionTypes from '../../constants/ReduxActionTypes';
import * as CommonUtils from '../../utils/CommonUtil';

const initialState = {
  items: [],
  count: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ReduxActionTypes.ADD_TO_FAVORITES: {
      const items = [...new Set([...state.items, JSON.parse(action.item)])];
      return {
        ...state,
        items: items,
        count: items.length,
      };
    }
    case ReduxActionTypes.REMOVE_FROM_FAVORITES: {
      const items = CommonUtils.removeItemFromArray(state.items, JSON.parse(action.item), 'id');
      return {
        ...state,
        items: items,
        count: items.length,
      };
    }
    default:
      return state;
  }
}

import {ADD_TO_FAVORITES,REMOVE_FROM_FAVORITES} from "../../constants/ReduxActionTypes"
  
  const initialState = {
    favorites:[],
    favoriteCount:0
  }
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case ADD_TO_FAVORITES: {
        return {
          ...state,
          favorites:[...new Set([...state.favorites, ...action.item])]
        }
      }
      case REMOVE_FROM_FAVORITES: {
        return {
          ...state,
          favorites:removeItemFromArray(state.favorites,item,"id")
        }
      }
      default:
        return state
    }
  }

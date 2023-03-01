import { useDispatch } from "react-redux"
import ReduxActionTypes from "../../constants/ReduxActionTypes"


 export const addToFavoriteList =(item)=>{
    const dispatch = useDispatch()
     dispatch({type:ReduxActionTypes.ADD_TO_FAVORITES,item:item})
    return item
}

export const removeFromFavoriteList =(item)=>{
    const dispatch = useDispatch()
     dispatch({type:ReduxActionTypes.REMOVE_FROM_FAVORITES,item:item})
    return item
}

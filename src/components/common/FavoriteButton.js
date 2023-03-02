import { useCallback } from 'react';
import { IconButton, MD2Colors } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { StyleSheet } from 'react-native';
import ReduxActionTypes from '../../constants/ReduxActionTypes';

/* Styles ==================================================================== */
const styles = StyleSheet.create({});

export default FavoriteButton = (props) => {
  const { item, size, color } = props;

  const dispatch = useDispatch();

  const onPressFavorite = useCallback(
    (isRemove = false) => {
      if (isRemove) {
        dispatch({ type: ReduxActionTypes.REMOVE_FROM_FAVORITES, item: JSON.stringify(item) });
      } else {
        dispatch({ type: ReduxActionTypes.ADD_TO_FAVORITES, item: JSON.stringify(item) });
      }
    },
    [dispatch],
  );

  return (
    <IconButton
      size={size || 32}
      iconColor={color || MD2Colors.white}
      icon={item?.isFavorite ? 'cards-heart' : 'cards-heart-outline'}
      onPress={() => onPressFavorite(item?.isFavorite)}
    />
  );
};

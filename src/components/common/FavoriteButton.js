import { useCallback } from 'react';
import { Badge, IconButton, MD2Colors, useTheme } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';
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
      icon={item.isFavorite ? 'cards-heart' : 'cards-heart-outline'}
      onPress={() => onPressFavorite(item.isFavorite)}
    />
  );
};

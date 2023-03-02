import * as React from 'react';
import { Badge, IconButton } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  containerStyle: {
    //backgroundColor:"red"
  },
  badgeStyle: {
    position: 'absolute',
    right: 10,
    top: 14,
  },
});

const MenuButton = (props) => {
  const { onPress } = props;
  const favoriteItemsCount = useSelector((state) => state.favorites.count);
  return (
    <View style={styles.containerStyle}>
      <IconButton icon={'menu'} onPress={onPress} />
      {favoriteItemsCount > 0 ? <Badge style={styles.badgeStyle} size={10} /> : null}
    </View>
  );
};

export default MenuButton;

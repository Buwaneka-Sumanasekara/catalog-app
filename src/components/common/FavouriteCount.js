import * as React from 'react';
import { Badge,useTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';

const FavoriteCount = () => {
  const theme = useTheme(); 
  const favoriteItemsCount=useSelector(state=>state.favorites.count)
  return <Badge style={{ backgroundColor: theme.colors.primary }}>{favoriteItemsCount}</Badge>;
};

export default FavoriteCount;

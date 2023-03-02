import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import DefaultWrapper from '../components/wrappers/DefaultWrapper';
import EmptyView from '../components/common/EmptyView';
import AnimeFavListItem from '../components/common/AnimeFavListItem';
import ScreenNames from '../constants/ScreenNames';

const FavoriteScreen = () => {
  const navigation = useNavigation();
  const favoriteItems = useSelector((state) => state.favorites.items);

  const onPressItem = (item) => {
    navigation.navigate(ScreenNames.DetailScreen.key, {
      itemId: item.id,
    });
  };

  return (
    <DefaultWrapper>
      <FlatList
        data={favoriteItems}
        extraData={favoriteItems}
        numColumns={2}
        renderItem={({ item, index }) => (
          <AnimeFavListItem columns={2} index={index} {...item} onPress={() => onPressItem(item)} />
        )}
        keyExtractor={(item, index) => `${item.id}${index}`}
        ListEmptyComponent={<EmptyView isFlatList={true} noDataText={'No favorite items found'} />}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </DefaultWrapper>
  );
};

export default FavoriteScreen;

import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Text, ActivityIndicator, MD2Colors, IconButton } from 'react-native-paper';
import AppSizes from '../../constants/AppSizes';
import Globals from '../../constants/Globals';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    paddingHorizontal: 50,
    marginTop: AppSizes.screen.height / 4,
    width: '100%',
  },
  loaderStyle: {
    marginBottom: Globals.PADDING.LARGE,
  },
  containerCenterStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default EmptyView = (props) => {
  const { isLoading, loadingText, noDataText, isFlatList } = props;
  return (
    <View style={isFlatList ? styles.containerStyle : styles.containerCenterStyle}>
      {isLoading ? (
        <React.Fragment>
          <ActivityIndicator size={'large'} animating={true} style={styles.loaderStyle} />
          <Text>{loadingText || `Hold on...`}</Text>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <IconButton icon="information-outline" size={50} />
          <Text>{noDataText || `No Data found`}</Text>
        </React.Fragment>
      )}
    </View>
  );
};

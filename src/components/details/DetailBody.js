import { StyleSheet, View } from 'react-native';
import { MD2Colors } from 'react-native-paper';
import AppSizes from '../../constants/AppSizes';
import Globals from '../../constants/Globals';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    height: AppSizes.screen.height * 0.5,
    marginTop: -100,
    borderTopLeftRadius: Globals.BOARDER_RADIUS.LARGE,
    borderTopRightRadius: Globals.BOARDER_RADIUS.LARGE,
    backgroundColor: MD2Colors.white,
    overflow: 'hidden',
    paddingHorizontal: Globals.PADDING.LARGE,
    paddingVertical: Globals.PADDING.LARGE,
  },
});

export default DetailBody = (props) => {
  const { children } = props;

  return <View style={styles.containerStyle}>{children}</View>;
};

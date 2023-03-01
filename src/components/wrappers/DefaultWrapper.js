import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View } from 'react-native';
import Globals from '../../constants/Globals';
import { MD2Colors } from 'react-native-paper';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  wrapperStyle: {
    paddingTop: Globals.PADDING.SMALL,
    paddingHorizontal: Globals.PADDING.MEDIUM,
    flex: 1,
    backgroundColor: MD2Colors.white,
  },
});

export default DefaultScreenWrapper = (props) => {
  const { children } = props;

  return <View style={styles.wrapperStyle}>{children}</View>;
};

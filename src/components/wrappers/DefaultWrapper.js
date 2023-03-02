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
  const { children, backgroundColor, noPadding } = props;

  return (
    <View
      style={[
        styles.wrapperStyle,
        backgroundColor && { backgroundColor: backgroundColor },
        noPadding && { paddingHorizontal: 0, paddingVertical: 0 },
      ]}
    >
      {children}
    </View>
  );
};

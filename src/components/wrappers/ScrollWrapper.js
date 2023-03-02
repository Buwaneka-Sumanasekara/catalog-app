import { StyleSheet, View, ScrollView } from 'react-native';
import Globals from '../../constants/Globals';
import { MD2Colors } from 'react-native-paper';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  wrapperStyle: {
    paddingHorizontal: Globals.PADDING.MEDIUM,
    flex: 1,
    backgroundColor: MD2Colors.white,
  },
});

export default ScrollViewWrapper = (props) => {
  const { children, backgroundColor, noPadding } = props;

  return (
    <View
      style={[
        styles.wrapperStyle,
        backgroundColor && { backgroundColor: backgroundColor },
        noPadding && { paddingHorizontal: 0, paddingVertical: 0 },
      ]}
    >
      <ScrollView>{children}</ScrollView>
    </View>
  );
};

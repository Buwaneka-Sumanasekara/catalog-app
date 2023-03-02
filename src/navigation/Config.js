import { MD2Colors } from 'react-native-paper';

const commonScreenOptions = {
  gestureEnabled: false,
  headerShown: false,
};

const detailScreenOptions = {
  title: '',
  headerTransparent: true,
  headerStyle: {
    backgroundColor: MD2Colors.transparent,
  },
};
export { commonScreenOptions, detailScreenOptions };

import { DefaultTheme } from '@react-navigation/native';
import { MD2Colors } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: MD2Colors.amber500,
    background: MD2Colors.white,
  },
};

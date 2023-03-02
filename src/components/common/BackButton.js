import * as React from 'react';
import { Badge, IconButton, MD2Colors, useTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  iconStyle: {
    backgroundColor: MD2Colors.grey600,
    opacity: 0.9,
  },
});

const BackButton = (props) => {
  const { onPress } = props;
  return (
    <IconButton
      size={35}
      iconColor={MD2Colors.white}
      icon={'keyboard-backspace'}
      style={styles.iconStyle}
      onPress={onPress}
    />
  );
};

export default BackButton;

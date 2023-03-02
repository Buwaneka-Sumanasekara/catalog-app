import * as React from 'react';
import { IconButton, MD2Colors } from 'react-native-paper';
import { StyleSheet } from 'react-native';

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

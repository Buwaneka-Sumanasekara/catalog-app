import { useSelector } from 'react-redux';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { MD2Colors, Text } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import AppSizes from '../../constants/AppSizes';
import Globals from '../../constants/Globals';
/* Styles ==================================================================== */

const headerHeight = AppSizes.screen.height * 0.5;

const styles = StyleSheet.create({
  imageStyle: {
    flex: 1,
    height: headerHeight,
    marginTop: -10,
  },
  linearGradientStyle: {
    opacity: 1,
    height: headerHeight,
  },
  infoWrapperStyle: {
    position: 'absolute',
    bottom: Globals.PADDING.LARGE * 2,
    left: Globals.PADDING.MEDIUM,
    zIndex: 10000,
  },
  titleStyle: {
    color: MD2Colors.white,
  },
});

export default DetailHeader = (props) => {
  const { images, year, score } = props;

  return (
    <ImageBackground
      source={{ uri: images?.webp?.image_url }}
      resizeMode="cover"
      style={styles.imageStyle}
    >
      <LinearGradient
        colors={[MD2Colors.black, MD2Colors.transparent, MD2Colors.black]}
        style={styles.linearGradientStyle}
      />
    </ImageBackground>
  );
};

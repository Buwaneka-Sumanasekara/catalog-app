import { ImageBackground, Pressable, StyleSheet, View } from 'react-native';
import { Text, MD2Colors, Chip, IconButton } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import Globals from '../../constants/Globals';
import AppSizes from '../../constants/AppSizes';
import * as CommonUtil from '../../utils/CommonUtil';

/* Styles ==================================================================== */

const boxWidth = (AppSizes.screen.width - Globals.BOARDER_RADIUS.MEDIUM * 3) * 0.5;

const styles = StyleSheet.create({
  containerStyle: {
    width: boxWidth,
  },
  imageContainerStyle: {
    borderRadius: Globals.BOARDER_RADIUS.MEDIUM,
    overflow: 'hidden',
    marginBottom: Globals.PADDING.EXTRA_SMALL,
    minHeight: 200,
  },
  titleStyle: {
    color: MD2Colors.white,
  },
  imageStyle: {
    flex: 1,
  },
  linearGradientStyle: {
    flex: 1,
    opacity: 0.5,
    justifyContent: 'space-around',
  },
  imageInnerTopStyle: {
    position: 'absolute',
    top: Globals.PADDING.SMALL,
    zIndex: 10000,
    width: '100%',
    paddingHorizontal: Globals.PADDING.MEDIUM,
  },
  topChipStyle: {
    backgroundColor: MD2Colors.white,
    alignSelf: 'flex-end',
  },
  imageInnerBottomStyle: {
    position: 'absolute',
    bottom: Globals.PADDING.SMALL,
    right: Globals.PADDING.SMALL,
    left: Globals.PADDING.SMALL,
    zIndex: 10000,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  imageInnerBottomSingleItemStyle: {
    justifyContent: 'flex-end',
  },
  chipStyle: {
    backgroundColor: MD2Colors.white,
    marginLeft: Globals.PADDING.SMALL,
  },

  footerContainerStyle: {
    position: 'absolute',
    zIndex: 10000,
    bottom: Globals.PADDING.MEDIUM,
    left: Globals.PADDING.MEDIUM,
    width: boxWidth - Globals.PADDING.MEDIUM * 2,
  },
  footerChipStyle: {
    backgroundColor: MD2Colors.red100,
    paddingRight: 0,
  },
  yearContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 0.5,
  },
  yearIconStyle: {
    marginRight: -4,
  },

  innerContainerStyle: {
    flex: 1,
    justifyContent: 'center',
  },
});

const AnimeFavListItem = (props) => {
  const { index, columns, images, title, score, onPress } = props;

  const paddings = CommonUtil.getPaddings(columns || 1, Globals.PADDING.SMALL, index || 0);
  return (
    <Pressable style={[styles.containerStyle, paddings]} onPress={onPress}>
      <View style={styles.innerContainerStyle}>
        <View style={styles.imageContainerStyle}>
          <ImageBackground
            source={{ uri: images?.webp?.image_url }}
            resizeMode="cover"
            style={styles.imageStyle}
          >
            <View style={styles.imageInnerTopStyle}>
              {score ? (
                <Chip style={styles.topChipStyle} selected={true} icon="star">{`${score}`}</Chip>
              ) : null}
            </View>

            <View style={styles.footerContainerStyle}>
              <Text
                variant="titleMedium"
                numberOfLines={1}
                style={styles.titleStyle}
                ellipsizeMode={'tail'}
              >
                {title}
              </Text>
            </View>

            <LinearGradient
              colors={[MD2Colors.transparent, MD2Colors.black]}
              style={styles.linearGradientStyle}
            />
          </ImageBackground>
        </View>
      </View>
    </Pressable>
  );
};

export default AnimeFavListItem;

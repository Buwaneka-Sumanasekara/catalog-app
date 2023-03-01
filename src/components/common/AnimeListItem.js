import { ImageBackground, StyleSheet, View } from 'react-native';
import { Text, MD2Colors, Chip, IconButton } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import Globals from '../../constants/Globals';
import { generateBoxShadowStyle } from '../../utils/CommonUtil';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  containerStyle: {
    marginBottom: Globals.PADDING.MEDIUM,
  },
  imageContainerStyle: {
    borderRadius: Globals.BOARDER_RADIUS.MEDIUM,
    overflow: 'hidden',
    marginBottom: Globals.PADDING.EXTRA_SMALL,
    height: 200,
    backgroundColor: 'red',
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
    right: Globals.PADDING.SMALL,
    zIndex: 10000,
    flexDirection: 'row',
    alignItems: 'center',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerChipStyle: {
    backgroundColor: MD2Colors.red100,
    paddingRight: 0,
  },
  yearContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  yearIconStyle: {
    marginRight: -4,
  },
});

const AnimeListItem = (props) => {
  const { images, title, score, year, rating, isFavorite } = props;

  return (
    <View style={styles.containerStyle}>
      <View style={styles.imageContainerStyle}>
        <ImageBackground
          source={{ uri: images?.webp?.image_url }}
          resizeMode="cover"
          style={styles.imageStyle}
        >
          {rating ? (
            <View style={styles.imageInnerTopStyle}>
              <Chip
                style={styles.chipStyle}
                selected={true}
                icon="shield-check"
              >{`${rating}`}</Chip>
            </View>
          ) : null}

          <View
            style={[
              styles.imageInnerBottomStyle,
              score ? {} : styles.imageInnerBottomSingleItemStyle,
            ]}
          >
            {score ? (
              <Chip style={styles.chipStyle} selected={true} icon="star">{`${score}`}</Chip>
            ) : null}
            <IconButton
              size={32}
              iconColor={MD2Colors.white}
              icon={isFavorite ? 'cards-heart' : 'cards-heart-outline'}
            />
          </View>
          <LinearGradient
            colors={[MD2Colors.transparent, MD2Colors.black]}
            style={styles.linearGradientStyle}
          />
        </ImageBackground>
      </View>
      <View style={styles.footerContainerStyle}>
        <Text variant="bodyMedium">{title}</Text>
        {year ? (
          <View style={styles.yearContainerStyle}>
            <IconButton style={styles.yearIconStyle} icon={'calendar-star'} />
            <Text variant="bodyMedium">{year}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default AnimeListItem;

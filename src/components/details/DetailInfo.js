import { StyleSheet, View } from 'react-native';
import { Chip, MD2Colors, Text } from 'react-native-paper';
import Globals from '../../constants/Globals';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'column',
  },
  topContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: Globals.PADDING.MEDIUM,
  },
  topLeftChipStyle: {},
  midChipStyle: {
    marginBottom: Globals.PADDING.MEDIUM,
  },
  midChipContainerStyle: {},
  topRightChipStyle: {
    backgroundColor: MD2Colors.grey300,
  },
  midContainerStyle: {
    paddingBottom: Globals.PADDING.MEDIUM,
  },
  bottomContainerStyle: {},
});

export default DetailInfo = (props) => {
  const { title, score, year, synopsis, rating } = props;

  return (
    <View style={styles.containerStyle}>
      <View style={styles.topContainerStyle}>
        {score ? (
          <Chip style={styles.topLeftChipStyle} selected={true} icon="star">{`${score}`}</Chip>
        ) : null}
        {year ? (
          <Chip
            style={styles.topRightChipStyle}
            selected={true}
            icon="calendar-star"
          >{`${year}`}</Chip>
        ) : null}
      </View>

      <View style={styles.midContainerStyle}>
        <Text variant="headlineLarge">{title}</Text>
        <View style={styles.midChipContainerStyle}>
          <Text>{rating}</Text>
        </View>
      </View>
      <View style={styles.bottomContainerStyle}>
        <Text variant="labelMedium">{synopsis}</Text>
      </View>
    </View>
  );
};

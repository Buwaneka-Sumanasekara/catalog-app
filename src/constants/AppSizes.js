import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const screenHeight = width < height ? height : width;
const screenWidth = width < height ? width : height;

export default {
  // Window Dimensions
  screen: {
    height: screenHeight,
    width: screenWidth,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
};

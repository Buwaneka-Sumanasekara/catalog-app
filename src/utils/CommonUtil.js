import { Platform } from 'react-native';
import Globals from '../constants/Globals';
import ScreenNames from '../constants/ScreenNames';

function removeDuplicatesFromArray(ar, key = '') {
  return [...new Map(ar.map((x) => [key, x])).values()];
}

function removeItemFromArray(ar, item, key = '') {
  return ar.filter((v) => v[key] !== item[key]);
}

function getAnimeStatusByScreenKey(screenKey) {
  let status = Globals.AnimeStatus.Airing;
  switch (screenKey) {
    case ScreenNames.HomeCompleteScreen.key:
      status = Globals.AnimeStatus.Complete;
      break;
    case ScreenNames.HomeUpComingScreen.key:
      status = Globals.AnimeStatus.Upcoming;
      break;
    default:
      status = Globals.AnimeStatus.Airing;
      break;
  }
  return status;
}

const generateBoxShadowStyle = (
  xOffset,
  yOffset,
  shadowColorIos,
  shadowOpacity,
  shadowRadius,
  elevation,
  shadowColorAndroid,
) => {
  if (Platform.OS === 'ios') {
    return {
      shadowColor: shadowColorIos,
      shadowOffset: { width: xOffset, height: yOffset },
      shadowOpacity,
      shadowRadius,
    };
  } else {
    return {
      elevation,
      shadowColor: shadowColorAndroid,
    };
  }
};

export {
  removeDuplicatesFromArray,
  removeItemFromArray,
  getAnimeStatusByScreenKey,
  generateBoxShadowStyle,
};

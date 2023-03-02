import Globals from '../constants/Globals';
import ScreenNames from '../constants/ScreenNames';

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

const checkValueExistInArray = (value, ar = [], key = '') => {
  const found = ar.find((item) => value[key] === item[key]);
  return !!found || false;
};

function getPaddings(columns, padding, index) {
  let paddingLeft = padding / 2;
  let paddingRight = padding / 2;
  let paddingTop = padding / 2;
  const paddingBottom = padding / 2;

  const row = Math.floor(index / columns);
  const isFirstItem = index % columns === 0 || index % columns === columns;
  const isLastItem = index % columns === columns - 1;
  if (row === 0) {
    //first row
    paddingTop = padding;
    if (isFirstItem) {
      paddingLeft = 0;
    } else if (isLastItem) {
      paddingRight = 0;
    }
  } else {
    if (isFirstItem) {
      paddingLeft = 0;
    } else if (isLastItem) {
      paddingRight = 0;
    }
  }

  return { paddingLeft, paddingRight, paddingTop, paddingBottom };
}

export { removeItemFromArray, getAnimeStatusByScreenKey, checkValueExistInArray, getPaddings };

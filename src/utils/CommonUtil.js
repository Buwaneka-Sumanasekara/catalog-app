const { default: Globals } = require('../constants/Globals');
const { default: ScreenNames } = require('../constants/ScreenNames');

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
      status = Globals.HomeCompleteScreen.Airing;
      break;
    case ScreenNames.HomeUpComingScreen.key:
      status = Globals.HomeUpComingScreen.Airing;
      break;
    default:
      status = Globals.AnimeStatus.Airing;
      break;
  }
  return status;
}

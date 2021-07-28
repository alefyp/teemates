import * as types from "./actionTypes";

export function addChampion(champion) {
  return { type: types.ADD_CHAMPION, champion };
}

export function removeChampion(champion) {
  return { type: types.REMOVE_CHAMPION, champion };
}

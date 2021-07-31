import * as types from "./actionTypes";
import * as leagueApi from "../../api/dataDragonApi";

export const loadChampionsBriefSuccess = (champions) => {
  return { type: types.LOAD_CHAMPIONS_BRIEF_SUCCESS, champions };
};

export const loadChampionsBrief = () => {
  return (dispatch) => {
    return leagueApi
      .getAllChampions()
      .then((response) => {
        dispatch(loadChampionsBriefSuccess(Object.values(response.data)));
      })
      .catch((error) => {
        throw error;
      });
  };
};

import axios from "axios";
import { handleResponse, handleError } from "./apiUtils";

const baseUrl = "https://ddragon.leagueoflegends.com/cdn/11.15.1/data/en_US";

export const getAllChampions = () => {
  return axios
    .get(`${baseUrl}/champion.json`)
    .then(handleResponse)
    .catch(handleError);
};

export const getSpecificChampion = (championName) => {
  return axios
    .get(`${baseUrl}/champion/${championName}.json`)
    .then(handleResponse)
    .catch(handleError);
};

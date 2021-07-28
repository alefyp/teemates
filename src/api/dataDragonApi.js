import axios from "axios";
import { handleResponse, handleError } from "./apiUtils";

const baseUrl = "http://ddragon.leagueoflegends.com/cdn/11.15.1/data/en_US";

export function getAllChampions() {
  return axios
    .get(`${baseUrl}/champion.json`)
    .then(handleResponse)
    .catch(handleError);
}

export function getSpecificChampion(championName) {
  return axios
    .get(`${baseUrl}/champion/${championName}.json`)
    .then(handleResponse)
    .catch(handleError);
}

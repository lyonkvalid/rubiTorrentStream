import axios from "axios";
import DataLoader from 'dataloader';
import { options } from "../options.js";

const fetch = axios.default.request;


export const dataLoader = (fetch) => new DataLoader(
  urls => Promise.all(urls.map(fetch))
);

export const fetchEpisodes = () => {
  return fetch(options("ep")).then(({ data }) => {
    return [... data.data.future_eps, ... data.data.eps];
  });
};

export const fetchSerial = (id) => {
  return fetch(options(`serial/${id}`)).then(({ data }) => data.data.serial);
};
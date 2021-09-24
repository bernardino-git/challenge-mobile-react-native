import { api } from './../../../services/api';

export const getAllComics = (currentPage: number) =>
  api.get(
    `/v1/public/comics?offset=${currentPage}&ts=1&apikey=17dd4b8faf0f00eeeb6633eaaf7774bc&hash=44d49ea637270c4b188070acb9d4abb8`
  );

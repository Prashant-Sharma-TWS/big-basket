import { BRAND, COUNTRY, SEASON, SORT } from "./actionTypes";

export const set_brand = (payload) => ({
  type: BRAND,
  payload: payload,
});
export const set_country = (payload) => ({
  type: COUNTRY,
  payload: payload,
});
export const set_season = (payload) => ({
  type: SEASON,
  payload: payload,
});

export const set_sort = (payload) => ({
  type: SORT,
  payload: payload,
});

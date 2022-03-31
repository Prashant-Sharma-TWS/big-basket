import { BRAND, COUNTRY, SEASON, SORT } from "./actionTypes";

const initialState = {
  brand: "",
  season: "",
  country: "",
  sort: "",
};

const filterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case BRAND:
      return { ...state, brand: payload };
    case SEASON:
      return { ...state, season: payload };
    case COUNTRY:
      return { ...state, country: payload };

    case SORT:
      return { ...state, sort: payload };

    default:
      return state;
  }
};

export default filterReducer;

import React, { useEffect } from "react";
import "./sideFilters.css";
import { useDispatch } from "react-redux";
import { set_brand, set_country, set_season } from "../Redux/Filter/actions";

import { useSelector } from "react-redux";

const SideFilters = () => {
  const dispatch = useDispatch();
  const brand = useSelector((store) => store.filter.brand);
  const season = useSelector((store) => store.filter.season);
  const country = useSelector((store) => store.filter.country);

  useEffect(() => {});
  return (
    <div className="side-filters">
      Brand
      <hr />
      <span>
        <input type="text" />
      </span>
      <br />
      <input
        type="radio"
        name="brand_filter"
        onChange={(e) => dispatch(set_brand(e.target.value))}
        value=""
        checked={brand === "" ? "checked" : ""}
      />
      <label value="">None</label>
      <br />
      <input
        type="radio"
        name="brand_filter"
        onChange={(e) => dispatch(set_brand(e.target.value))}
        value="nestle"
      />
      <label value="">Nestle</label>
      <br />
      <input
        type="radio"
        name="brand_filter"
        onChange={(e) => dispatch(set_brand(e.target.value))}
        value="nandini"
      />
      <label value="">Nandini</label>
      <br />
      <input
        type="radio"
        name="brand_filter"
        onChange={(e) => dispatch(set_brand(e.target.value))}
        value="fresho"
      />
      <label value="">Fresho</label>
      <br />
      <input
        type="radio"
        name="brand_filter"
        onChange={(e) => dispatch(set_brand(e.target.value))}
        value="catch"
      />
      <label value="">Catch</label>
      <br />
      <br />
      Seasonal
      <hr />
      <input type="text" />
      <br />
      <input
        type="radio"
        name="season_filter"
        onChange={(e) => dispatch(set_season(e.target.value))}
        value=""
        checked={season === "" ? "checked" : ""}
      />
      <label value="">None</label>
      <br />
      <input
        type="radio"
        name="season_filter"
        onChange={(e) => dispatch(set_season(e.target.value))}
        value="summer"
      />
      <label value="">Summer</label>
      <br />
      <input
        type="radio"
        name="season_filter"
        onChange={(e) => dispatch(set_season(e.target.value))}
        value="winter"
      />
      <label value="">Winter</label>
      <br />
      <input
        type="radio"
        name="season_filter"
        onChange={(e) => dispatch(set_season(e.target.value))}
        value="monsoon"
      />
      <label value="">Monsoon</label>
      <br />
      <br />
      Country Of Origin
      <hr />
      <input type="text" />
      <br />
      <input
        type="radio"
        name="country_filter"
        onChange={(e) => dispatch(set_country(e.target.value))}
        value=""
        checked={country === "" ? "checked" : ""}
      />
      <label value="">None</label>
      <br />
      <input
        type="radio"
        name="country_filter"
        onChange={(e) => dispatch(set_country(e.target.value))}
        value="india"
      />
      <label value="">India</label>
      <br />
      <input
        type="radio"
        name="country_filter"
        onChange={(e) => dispatch(set_country(e.target.value))}
        value="america"
      />
      <label value="">USA</label>
      <br />
      <input
        type="radio"
        name="country_filter"
        onChange={(e) => dispatch(set_country(e.target.value))}
        value="africa"
      />
      <label value="">Africa</label>
      <br />
      <input
        type="radio"
        name="country_filter"
        onChange={(e) => dispatch(set_country(e.target.value))}
        value="england"
      />
      <label value="">England</label>
      <br />
    </div>
  );
};

export default SideFilters;

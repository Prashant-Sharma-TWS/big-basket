import { Container } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AllProducts from "../Components/Products/AllProducts";
import SideFilters from "../Components/Products/SideFilters";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { set_sort } from "../Redux/Filter/actions";
import "../Css/categorywiseproducts.css";

const CategoryWiseProducts = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const { pathname } = useLocation();

  const brand = useSelector((store) => store.filter.brand);
  const season = useSelector((store) => store.filter.season);
  const country = useSelector((store) => store.filter.country);
  const sort = useSelector((store) => store.filter.sort);

  useEffect(() => {
    axios
      .get(
        `${pathname}?brand=${brand}&season=${season}&country=${country}&sort=${sort}`
      )
      .then((data) => {
        setProducts(data.data);
        console.log(data.data);
      });
  }, [pathname, brand, season, country, sort]);

  console.log(products);
  return (
    <Container className="cont" maxWidth="lg" fixed>
      <div className="main-holder">
        <SideFilters />

        <div className="main-holder-inner">
          <div className="cat-input">
            <p id="cat">
              {category} ({products.length})
            </p>
            <button>Refine</button>
            <select
              onChange={(e) => {
                dispatch(set_sort(e.target.value));
              }}
            >
              <option value="name">Alphabetically</option>
              <option value="priceasc">Price- Low to High</option>
              <option value="pricedesc">Price- High to Low</option>
              <option value="discount">% Off - High to Low</option>
            </select>
          </div>
          <span className="truck-cat">
            <img
              width="25"
              height="25"
              className="truck"
              src="https://www.bbassets.com/static/v2531/custPage/build/content/img/standard-del.svg"
              alt="not found"
            />
            ALL PRODUCTS
          </span>
          <hr className="truck-cat-hr" />

          <hr />
          <div className="products-display">
            {products.map((product) => {
              return <AllProducts product={product} key={product._id} />;
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CategoryWiseProducts;

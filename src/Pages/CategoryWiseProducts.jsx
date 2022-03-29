import { Container } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AllProducts from "../Components/AllProducts";
import SideFilters from "../Components/SideFilters";
import { set_sort } from "../Redux/Filter/actions";
import "../Css/categorywiseproducts.css";

const CategoryWiseProducts = () => {
  const dispatch = useDispatch();
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const brand = useSelector((store) => store.filter.brand);
  const season = useSelector((store) => store.filter.season);
  const country = useSelector((store) => store.filter.country);
  const sort = useSelector((store) => store.filter.sort);

  useEffect(() => {
    axios
      .get(
        `/products/cl/${category}?brand=${brand}&season=${season}&country=${country}&sort=${sort}`
      )
      .then((data) => {
        setProducts(data.data);
        console.log(data.data);
      });
  }, [brand, season, country, sort]);

  return (
    <Container className="cont">
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

import { Container } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AllProducts from "../Components/Products/AllProducts";
import SideFilters from "../Components/Products/SideFilters";
import "./categorywiseproducts.css";

const CategoryWiseProducts = () => {
  const [products, setProducts] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    axios.get(`${pathname}`).then((data) => setProducts(data.data));
  }, [pathname]);

  console.log(products);
  return (
    <Container>
      <div className="main-holder">
        <SideFilters />

        <div className="main-holder-inner">
          <div className="cat-input">
            <p id="cat">Fruits & Vegetables ({products.length})</p>
            <select>
              <option value="">Popularity</option>
              <option value="">Popularity</option>
            </select>
          </div>
          <hr />
          <div className="products-display">
            {products.map((product) => {
              return <AllProducts key={product._id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CategoryWiseProducts;

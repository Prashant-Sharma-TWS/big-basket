import { Container } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AllProducts from "../Components/AllProducts";
import SideFilters from "../Components/SideFilters";
import "./categorywiseproducts.css";

const CategoryWiseProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/products/cl/FRUITS & VEGETABLES")
      .then((data) => setProducts(data.data));
  }, []);

  return (
    <Container>
      <div className="main-holder">
        <SideFilters />

        <div className="main-holder-inner">
          <div className="cat-input">
            <p id="cat">Fruits & Vegetables (Count)</p>
            <select>
              <option value="">Popularity</option>
              <option value="">Popularity</option>
            </select>
          </div>
          <hr />
          <div className="products-display">
            {products.map((product) => {
              return <AllProducts product={product} />;
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CategoryWiseProducts;

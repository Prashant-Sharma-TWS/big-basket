import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideFilters from "../Products/SideFilters";
import style from "./singleprod.module.css";

export const SingleProduct = () => {
  const [value, setValue] = useState(1);

  const [image, setImage] = useState("");
  const [images, setImages] = useState([]);

  const [product, setProduct] = useState({});
  const { id } = useParams();

  const [qtype, setqtype] = useState("");

  useEffect(() => {
    axios.get(`/products/${id}`).then((data) => {
      setProduct(data.data);
      setImages(data.data.photo);
      setImage(images[0]);
      setqtype(data.data.quantityType);
    });
  }, [id]);
  
  useEffect(() => {
    axios.get(`/products/${id}`).then((data) => {
      setProduct(data.data);
    });
  }, [userid, id]);

  return (
    <div>
      <div className={style.mainDiv}>

        <div className={style.left}>
          <SideFilters />
        </div>

        <div className={style.right}>
          <div className={style.rightKaLeftMain}>
            <img src={image} className={style.posterImg} />

            <div className={style.subImagesMainiv}>
              <img
                src={images[1]}
                className={style.subImg}
                onClick={() => setImage(images[1])}
              />

              <img
                src={images[2]}
                className={style.subImg}
                onClick={() => setImage(images[2])}
              />

              <img
                src={images[0]}
                className={style.subImg}
                onClick={() => setImage(images[0])}
              />
              <img
                src={images[1]}
                className={style.subImg}
                onClick={() => setImage(images[1])}
              />
            </div>
          </div>

          <div className={style.rightKaRightMain}>
            <p>{product.name}</p>

            <p>
              MRP:{" "}
              <span className={style.linethroughPrice}>
                Rs {product.price}.00
              </span>
              <span className={style.orgPrice}>
                Price: Rs {product.price}.00
              </span>
              <span className={style.yousave}>You Save:0%</span>
              <span style={{ marginLeft: "3px" }}>
                (Inclusive of all taxes)
              </span>
            </p>

            <div className={style.ratingDiv}>
              <p className={style.rating}>
                4.6{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 26 26"
                >
                  <path
                    fill="#689f38"
                    fill-rule="nonzero"
                    d="M19.72 16.183l.9 5.254a2 2 0 0 1-2.902 2.108l-4.485-2.358a.5.5 0 0 0-.466 0l-4.485 2.358a2 2 0 0 1-2.902-2.108l.9-5.254-3.816-3.72A2 2 0 0 1 3.572 9.05l5.275-.767 2.36-4.78a2 2 0 0 1 3.586 0l2.36 4.78 5.275.767a2 2 0 0 1 1.108 3.411l-3.817 3.721z"
                  ></path>
                </svg>
              </p>
              <div className={style.ratingCount}>60 Ratings</div>
            </div>

            <div className={style.basketButtonGroupMainDiv}>
              <input
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
              />
              <button className={style.addtobasketBtn}>ADD TO BASKET</button>
              <button className={style.saveBtn}>SAVE</button>
            </div>

            <div className={style.deleverytruckdiv}>
              <img
                src="https://flyclipart.com/thumb2/free-delivery-delivery-delivery-truck-icon-with-png-and-vector-695245.png"
                className={style.deleverytruckimg}
              />
              <div className={style.deleverytimep}>
                Standard: Today 3:00PM - 7:30PM
              </div>
            </div>

            <div>
              <div className={style.packSize}>Pack Sizes</div>

              <div
                className={style.packDetail}
                style={{
                  "background-color": "#E6F3D3",
                  border: "1px solid #E6F3D3",
                  marginTop: "3px",
                }}
              >
                <div style={{ marginLeft: "10px" }}>1 {qtype}</div>

                <div style={{ display: "flex" }}>
                  <div>Rs {product.price}.00</div>

                  <p style={{ marginLeft: "3px", color: "grey" }}>
                    MRP:{" "}
                    <span className={style.linethroughPrice}>
                      Rs {product.price}.00
                    </span>
                    <span className={style.yousave}>You Save:0%</span>
                  </p>
                </div>

                <div
                  style={{
                    fontSize: "30px",
                    color: "white",
                    fontWeight: "unset",
                    backgroundColor: "#84C225",
                    padding: "2px",
                  }}
                >
                  &#10004;
                </div>
              </div>

              <div className={style.packDetail} style={{ marginTop: "6px" }}>
                <div style={{ marginLeft: "10px" }}>2 {qtype}</div>
                <div style={{ display: "flex" }}>
                  <div>Rs {product.price * 2}.00</div>

                  <p style={{ marginLeft: "3px", color: "grey" }}>
                    MRP:{" "}
                    <span className={style.linethroughPrice}>
                      Rs {product.price}.00
                    </span>
                    <span className={style.yousave}>You Save:0%</span>
                  </p>
                </div>
                <div style={{ fontSize: "30px", color: "grey" }}>&#10004;</div>
              </div>

              <div className={style.packDetail} style={{ marginTop: "6px" }}>
                <div style={{ marginLeft: "10px" }}>5 {qtype}</div>
                <div style={{ display: "flex" }}>
                  <div>Rs {product.price * 5}.00</div>

                  <p style={{ marginLeft: "3px", color: "grey" }}>
                    MRP:{" "}
                    <span className={style.linethroughPrice}>
                      Rs {product.price}.00
                    </span>
                    <span className={style.yousave}>You Save:0%</span>
                  </p>
                </div>
                <div style={{ fontSize: "30px", color: "grey" }}>&#10004;</div>
              </div>
            </div>
          </div>
        </div>

      </div>


      
    </div>
  );
};

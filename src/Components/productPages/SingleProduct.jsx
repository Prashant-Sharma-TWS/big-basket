import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./singleprod.module.css";
export const SingleProduct = () => {
  const { id } = useParams();
  const [userid, setUserId] = useState("62435193c1dab43bbce3f6eb");
  const [product, setProduct] = useState({});

  const [image, setImage] = useState(
    "https://www.bigbasket.com/media/uploads/p/l/1213522_3-nivea-men-fresh-active-roll-on.jpg"
  );
  // const [setcontentBox, setSetContentBox] = useState(false);

  useEffect(() => {
    axios.get(`/products/${id}`).then((data) => {
      setProduct(data.data);
    });
  }, [userid, id]);

  // {
  //   _id: "62419c96b164babf01a9d64a",
  //   name: "Onion - Organically Grown",
  //   description:
  //     "It is organically grown and handpicked from farm Product image shown is for representation purpose only, the actually product may vary based on season, produce & availability.",
  //   price: 33,
  //   mrp: 41.25,
  //   discount: 20,
  //   category: "fruits-vegetables",
  //   stock: 30,
  //   brand: "fresho",
  //   superSaver: true,
  //   quantityType: "kg",
  //   season: "summer",
  //   country: "india",
  //   photo: [
  //     "https://www.bigbasket.com/media/uploads/p/l/10000150_19-fresho-onion.jpg",
  //     "https://www.bigbasket.com/media/uploads/p/l/10000150-2_3-fresho-onion.jpg",
  //     "https://www.bigbasket.com/media/uploads/p/l/10000150-3_4-fresho-onion.jpg",
  //   ],
  // };

  return (
    <div>
      <div className={style.mainDiv}>
        <div className={style.left}>Left</div>
        <div className={style.right}>
          <div className={style.rightKaLeftMain}>
            <img alt="" src={image} className={style.posterImg} />
            <div className={style.subImagesMainiv}>
              <img
                alt=""
                src="https://www.bigbasket.com/media/uploads/p/l/1213522_3-nivea-men-fresh-active-roll-on.jpg"
                className={style.subImg}
                onClick={() =>
                  setImage(
                    "https://www.bigbasket.com/media/uploads/p/l/1213522_3-nivea-men-fresh-active-roll-on.jpg"
                  )
                }
              />
              <img
                alt=""
                src="https://www.bigbasket.com/media/uploads/p/l/1213522-2_2-nivea-men-fresh-active-roll-on.jpg"
                className={style.subImg}
                onClick={() =>
                  setImage(
                    "https://www.bigbasket.com/media/uploads/p/l/1213522-2_2-nivea-men-fresh-active-roll-on.jpg"
                  )
                }
              />
              <img
                alt=""
                src="https://www.bigbasket.com/media/uploads/p/l/1213522-4_2-nivea-men-fresh-active-roll-on.jpg"
                className={style.subImg}
                onClick={() =>
                  setImage(
                    "https://www.bigbasket.com/media/uploads/p/l/1213522-4_2-nivea-men-fresh-active-roll-on.jpg"
                  )
                }
              />
              <img
                alt=""
                src="https://www.bigbasket.com/media/uploads/p/l/1213522-7_2-nivea-men-fresh-active-roll-on.jpg"
                className={style.subImg}
                onClick={() =>
                  setImage(
                    "https://www.bigbasket.com/media/uploads/p/l/1213522-7_2-nivea-men-fresh-active-roll-on.jpg"
                  )
                }
              />
            </div>
          </div>
          <div className={style.rightKaRightMain}>
            <p>Nivea Men Fresh Active Roll On, 2x50 ml (MultiPack)</p>
            <p>MRP:</p>
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
              <input />
              <button className={style.addtobasketBtn}>ADD TO BASKET</button>
              <button className={style.saveBtn}>SAVE</button>
            </div>
            <div className={style.deleverytruckdiv}>
              <img
                alt=""
                src="https://flyclipart.com/thumb2/free-delivery-delivery-delivery-truck-icon-with-png-and-vector-695245.png"
                className={style.deleverytruckimg}
              />
              <p className={style.deleverytimep}>
                Standard: Today 3:00PM - 7:30PM
              </p>
            </div>
            <div>
              <p className={style.packSize}>Pack Sizes</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className={style.accordion}>
        <div className={({setcontentBox} ? style.active : style.contentBox)}>
        <div className={style.label}>Benefits</div>
        <div className={style.content}>
            <p>1. It has easy to use application.</p>
            <p>2. Keeps you feeling fresh all day long.</p>
            <p>3. The deo has antiperspirant protection and reliable safe.</p>
            <p>4. Giving you protection against bad odour for a long time.</p>
        </div>
        </div>
        </div> */}
    </div>
  );
};

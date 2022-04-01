import axios from "axios";
import React, { useEffect, useState } from "react";
import { ArrowDown } from "../../Elements/Element";
import { OfferSection } from "../../Elements/Viewport_Bank";
import AllProducts from "../Products/AllProducts";

export const Offers = () => {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    axios.get(`/products/sellers`).then((data) => {
      setSellers(data.data);
    });
  }, []);

  return (
    <OfferSection>
      <div className="offer-top-margin">
        <img
          src="https://www.bigbasket.com/media/uploads/banner_images/hp_cmc_hardinsasta_bangalore_400_270322.jpeg"
          alt="offers"
          width="100%"
        />
      </div>

      <h2>Bank Offers</h2>
      <Wrapper
        img1="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/2365bc54-1700-4f28-8130-d9f65075d0e7/hp_aff_m_indus_360_260322.jpg"
        img2="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/2365bc54-1700-4f28-8130-d9f65075d0e7/hp_aff_m_kotak_360_260322.jpg"
        img3="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/2365bc54-1700-4f28-8130-d9f65075d0e7/hp_aff_m_amex_360_260322.jpg"
        img4="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/2365bc54-1700-4f28-8130-d9f65075d0e7/hp_aff_m_dbs_360_260322.jpg"
      />

      <h2>Best Sellers</h2>
      <ul className="best-sellers">
        {sellers.map((product) => (
          <li className="best-seller-product" key={product._id}>
            <AllProducts product={product} />
          </li>
        ))}
      </ul>

      <h2>Most Popular</h2>
      <Wrapper
        img1="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/f3cb6ef4-e1a4-48f0-8c74-746775d0b4cc/hp_mostpopularStorefront_m_480_250322_01.jpg"
        img2="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/f3cb6ef4-e1a4-48f0-8c74-746775d0b4cc/hp_mostpopularStorefront_m_480_250322_02.jpg"
        img3="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/f3cb6ef4-e1a4-48f0-8c74-746775d0b4cc/hp_mostpopularStorefront_m_480_250322_03.jpg"
        img4="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/f3cb6ef4-e1a4-48f0-8c74-746775d0b4cc/hp_mostpopularStorefront_m_480_250322_04.jpg"
      />

      <h2>Top Offers</h2>
      <Wrapper
        img1="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/e451b0fa-4111-46fe-b4fc-96916010316c/hp_topoffersStorefront_m_480_250322_01.jpg"
        img2="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/e451b0fa-4111-46fe-b4fc-96916010316c/hp_topoffersStorefront_m_480_250322_02.jpg"
        img3="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/e451b0fa-4111-46fe-b4fc-96916010316c/hp_topoffersStorefront_m_480_250322_03.jpg"
        img4="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/e451b0fa-4111-46fe-b4fc-96916010316c/hp_topoffersStorefront_m_480_250322_04.jpg"
      />

      <h2>Fruits and Vegetables</h2>
      <WrapperLikeFruit
        img1="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/df4a7094-3a3a-4843-b594-ee6f53ac4099/hp_fnv-organic-fnv-Storefront_m_250322_01.jpg"
        img2="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/df4a7094-3a3a-4843-b594-ee6f53ac4099/hp_fnv-fresh-fruits-Storefront_m_250322_02.jpg"
        img3="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/df4a7094-3a3a-4843-b594-ee6f53ac4099/hp_fnv-fresh-veggs-Storefront_m_250322_03.jpg"
        img4="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/df4a7094-3a3a-4843-b594-ee6f53ac4099/hp_fnvStorefront-blr-hyd-chn_m_250322_04.jpg"
        img5="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/df4a7094-3a3a-4843-b594-ee6f53ac4099/hp_fnvexotic-fnv-Storefront_m_250322_05.jpg"
      />

      <h2>Your Daily Staples</h2>
      <WrapperLikeStaple
        img1="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/43e5e9b9-ab75-4d63-8bc6-bdaf41e01148/hp_staplesStorefront_m_480_250322_01.jpg"
        img2="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/43e5e9b9-ab75-4d63-8bc6-bdaf41e01148/hp_staplesStorefront_m_480_250322_02.jpg"
        img3="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/43e5e9b9-ab75-4d63-8bc6-bdaf41e01148/hp_staplesStorefront_m_480_250322_03.jpg"
        img4="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/43e5e9b9-ab75-4d63-8bc6-bdaf41e01148/hp_staplesStorefront_m_480_250322_04.jpg"
        img5="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/43e5e9b9-ab75-4d63-8bc6-bdaf41e01148/hp_staplesStorefront_m_480_250322_05.jpg"
        img6="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/43e5e9b9-ab75-4d63-8bc6-bdaf41e01148/hp_staplesStorefront_m_480_250322_06.jpg"
      />

      <h2>Beverages</h2>
      <WrapperLikeFruit
        img1="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/531bf38b-0fb2-4386-be25-11ff574c8de6/hp_beveragesStorefront_m_250322_01.jpg"
        img2="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/531bf38b-0fb2-4386-be25-11ff574c8de6/hp_beveragesStorefront_m_250322_02.jpg"
        img3="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/531bf38b-0fb2-4386-be25-11ff574c8de6/hp_beveragesStorefront_m_250322_03.jpg"
        img4="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/531bf38b-0fb2-4386-be25-11ff574c8de6/hp_beveragesStorefront_m_250322_04.jpg"
        img5="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/531bf38b-0fb2-4386-be25-11ff574c8de6/hp_beveragesStorefront_m_250322_05.jpg"
      />

      <h2>Snacks Store</h2>
      <Wrapper
        img1="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/1d985c38-fc54-41ec-afcc-0b23cd2f7fc4/hp_snacksStorefront_m_480_250322_01.jpg"
        img2="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/1d985c38-fc54-41ec-afcc-0b23cd2f7fc4/hp_snacksStorefront_m_480_250322_02.jpg"
        img3="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/1d985c38-fc54-41ec-afcc-0b23cd2f7fc4/hp_snacksStorefront_m_480_250322_03.jpg"
        img4="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/1d985c38-fc54-41ec-afcc-0b23cd2f7fc4/hp_snacksStorefront_m_480_250322_04.jpg"
      />

      <h2>Cleaning &amp; Household</h2>
      <Wrapper
        img1="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/d696b3fe-7690-479b-9c60-3975dc5b365a/hp_cleaningStorefront_m_480_250322_01.jpg"
        img2="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/d696b3fe-7690-479b-9c60-3975dc5b365a/hp_cleaningStorefront_m_480_250322_02.jpg"
        img3="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/d696b3fe-7690-479b-9c60-3975dc5b365a/hp_cleaningStorefront_m_480_250322_03.jpg"
        img4="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/d696b3fe-7690-479b-9c60-3975dc5b365a/hp_cleaningStorefront_m_480_250322_04.jpg"
      />

      <h2>Beauty and Hygiene</h2>
      <WrapperLikeFruit
        img1="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/05d0e78a-50f1-49cd-b41a-f094bece2b8c/hp_beauty-summer-deos-Storefront_m_250322_01.jpg"
        img2="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/05d0e78a-50f1-49cd-b41a-f094bece2b8c/hp_beauty-min-20-off-Storefront_m_250322_02.jpg"
        img3="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/05d0e78a-50f1-49cd-b41a-f094bece2b8c/hp_beauty-min-40-off-Storefront_m_250322_03.jpg"
        img4="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/05d0e78a-50f1-49cd-b41a-f094bece2b8c/hp_beauty-makeup-mania-summer-edit-Storefront_m_250322_04.jpg"
        img5="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/05d0e78a-50f1-49cd-b41a-f094bece2b8c/hp_beauty-shaveing-Storefront_m_250322_05.jpg"
      />

      <h2>Home and Kitchen</h2>
      <WrapperLikeStaple
        img1="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/f8ecc58a-1604-4dcc-b653-5b39cebb12cb/hp_GM-under-99-Storefront_m_250322_01.jpg"
        img2="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/f8ecc58a-1604-4dcc-b653-5b39cebb12cb/hp_GM-100-199-Storefront_m_250322_02.jpg"
        img3="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/f8ecc58a-1604-4dcc-b653-5b39cebb12cb/hp_GM-min30-49-Storefront_m_250322_03.jpg"
        img4="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/f8ecc58a-1604-4dcc-b653-5b39cebb12cb/hp_GM-min-50-0ff-Storefront_m_250322_04.jpg"
        img5="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/f8ecc58a-1604-4dcc-b653-5b39cebb12cb/hp_GM-pressure-cooker-Storefront_m_250322_05.jpg"
        img6="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/f8ecc58a-1604-4dcc-b653-5b39cebb12cb/hp_GM-storage-containers-Storefront_m_250322_06.jpg"
      />

      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_kgp_m_babycare_250322_400.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_kgp_m_petstore_250322_400.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_bcd_m_bcd_250322_400.jpg"
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_kgp_m_health_suppliment_250322_400.jpg"
              alt="Fourth slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true">
            <ArrowDown className="prev-icon-car" prevcolor="transparent" />
          </span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true">
            <ArrowDown className="prev-icon-car" prevcolor="transparent" />
          </span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <h2>Brand Store</h2>
      <WrapperLikeStaple
        img1="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/9f970017-ea4c-4e60-8c91-27b8d021ff13/hp_brandStorefront_m_480_250322_01.jpg"
        img2="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/9f970017-ea4c-4e60-8c91-27b8d021ff13/hp_brandStorefront_m_480_250322_02.jpg"
        img3="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/9f970017-ea4c-4e60-8c91-27b8d021ff13/hp_brandStorefront_m_480_250322_03.jpg"
        img4="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/9f970017-ea4c-4e60-8c91-27b8d021ff13/hp_brandStorefront_m_480_250322_04.jpg"
        img5="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/9f970017-ea4c-4e60-8c91-27b8d021ff13/hp_brandStorefront_m_480_250322_05.jpg"
        img6="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/9f970017-ea4c-4e60-8c91-27b8d021ff13/hp_brandStorefront_m_480_250322_06.jpg"
      />

      <h2>Featured Recipes</h2>
      <div
        id="carouselExample2Controls"
        className="carousel slide featured-slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_c_mango_cxnp-9685_400_240322.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_c_dragon-fruit_cxnp-9683_400_240322.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_c_papaya_cxnp-9686_400_240322.jpg"
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_c_submit_cxnp-9687_400_240322.jpg"
              alt="Fourth slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_c_winner_cxnp-9688_400_240322.jpg"
              alt="Fifth slide"
              className="d-block w-100"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExample2Controls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true">
            <ArrowDown className="prev-icon-car" prevcolor="transparent" />
          </span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExample2Controls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true">
            <ArrowDown className="prev-icon-car" prevcolor="transparent" />
          </span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="store-info-box">
        <h3>bigbasket - online grocery store</h3>
        <p>
          Did you ever imagine that the freshest of
          <b> fruits and vegetables </b>, top quality pulses and food grains,{" "}
          <b> dairy products </b> and hundreds of branded items could be
          handpicked and delivered to your home, all at the click of a button?
          India's first comprehensive online megastore, bigbasket.com, brings a
          whopping 20000+ products with more than 1000 brands, to over 4 million
          happy customers. From household cleaning products to beauty and
          makeup, bigbasket has everything you need for your daily needs.
          bigbasket.com is convenience personified We've taken away all the
          stress associated with shopping for daily essentials, and you can now
          order all your household products and even buy groceries online
          without travelling long distances or standing in serpentine queues.
          Add to this the convenience of finding all your requirements at one
          single source, along with great savings, and you will realize that
          bigbasket- India's largest online supermarket, has revolutionized the
          way India shops for groceries. Online grocery shopping has never been
          easier. Need things fresh? Whether it's fruits and vegetables or dairy
          and meat, we have this covered as well! Get fresh eggs, meat, fish and
          more online at your convenience. Hassle-free Home Delivery options
        </p>
        <p>
          We deliver to 25 cities across India and maintain excellent delivery
          times, ensuring that all your products from groceries to snacks
          <b> branded foods </b> reach you in time.
        </p>
        <ul>
          <li>
            Slotted Delivery: Pick the most convenient delivery slot to have
            your grocery delivered. From early morning delivery for early birds,
            to late-night delivery for people who work the late shift, bigbasket
            caters to every schedule.
          </li>
          <li>
            Express Delivery: This super useful service can be availed by
            customers in cities like Bangalore, Mumbai, Pune, Chennai, Kolkata,
            Hyderabad and Delhi-NCR in which we deliver your orders to your
            doorstep in 90 Minutes.
          </li>
          <li>
            BB Specialty stores: Missed out on buying that essential item from
            your favorite neighborhood store for tonight's party? We'll deliver
            it for you! From bakery, sweets and meat to flowers and chocolates,
            we deliver your order in 90 minutes, through a special arrangement
            with a nearby specialty store, verified by us.
          </li>
        </ul>
        <button
          onClick={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "block";
          }}
        >
          Read More...
        </button>
        <div className="read-more">
          <h4>India's biggest Online Supermarket</h4>
          <p>
            bigbasket.com believes in providing the highest level of customer
            service and is continuously innovating to meet customer
            expectations. Our On-time Guarantee is one such assurance where we
            refund 5% of the bill value if the delivery is delayed (however, due
            to the pandemic caused by Covid-19 our delivery might get delayed.
            Delivery Guarantee will not be applicable). For all your order
            values above Rs. 1200, we provide free delivery. A wide range of
            imported and gourmet products are available through our express
            delivery and slotted delivery service. If you ever find an item
            missing on delivery or want to return a product, you can report it
            to us within 48 hours for a 'no-questions-asked' refund.
          </p>
          <p>Best quality products for our quality-conscious customers.</p>
          <p>
            bigbasket.com is synonymous with superior quality and continues to
            strive for higher levels of customer trust and confidence, by taking
            feedback and giving our customers what they want. We have added the
            convenience of pre-cut fruits in our Fresho range. If it's a product
            category you're looking to shop from, we've made it convenient for
            you to access all products in a section easily. For instance, if
            you're looking for beverages, you can order from a long list of
            <b> beverages </b>
            that include cool drinks, hot teas, fruit juices and more.
          </p>
          <p>
            We are proud to be associated closely with the farmers from whom we
            source our fresh products. Most of our farm-fresh products are
            sourced directly from farmers, which not only ensures the best
            prices and freshest products for our customers but also helps the
            farmers get better prices. With more than 80 Organic Fruits and
            Vegetables and a wide range of organic staples, bigbasket has the
            largest range in the organic products category.
          </p>
          <p>
            When it comes to payment, we have made it easy for our customers can
            pay through multiple payment channels like Credit and Debit cards,
            Internet Banking, e-wallets and Sodexo passes or simply pay Cash on
            Delivery (COD).The convenience of shopping for home and daily needs,
            while not compromising on quality, has made bigbasket.com the online
            supermarket of choice for thousands of happy customers across India.
          </p>
        </div>
      </div>
    </OfferSection>
  );
};

const Wrapper = ({ img1, img2, img3, img4 }) => {
  return (
    <>
      <div className="wrapperer">
        <div>
          <img src={img1} alt="offers" width="270px" />
        </div>
        <div>
          <img src={img2} alt="offers" width="270px" />
        </div>
        <div>
          <img src={img3} alt="offers" width="270px" />
        </div>
        <div>
          <img src={img4} alt="offers" width="270px" />
        </div>
      </div>
    </>
  );
};

const WrapperLikeFruit = ({ img1, img2, img3, img4, img5 }) => {
  return (
    <>
      <div className="wrapperer fruits-veg">
        <div>
          <img src={img1} alt="offers" />
        </div>
        <div className="small-wrapper">
          <div>
            <img src={img2} alt="offers" width="48%" />
          </div>
          <div>
            <img src={img3} alt="offers" />
          </div>
          <div>
            <img src={img4} alt="offers" />
          </div>
          <div>
            <img src={img5} alt="offers" />
          </div>
        </div>
      </div>
    </>
  );
};

const WrapperLikeStaple = ({ img1, img2, img3, img4, img5, img6 }) => {
  return (
    <>
      <div className="wrapperer staples">
        <div>
          <img src={img1} alt="offers" width="270px" />
        </div>
        <div>
          <img src={img2} alt="offers" width="270px" />
        </div>
        <div>
          <img src={img3} alt="offers" width="270px" />
        </div>
        <div>
          <img src={img4} alt="offers" width="270px" />
        </div>
        <div>
          <img src={img5} alt="offers" width="270px" />
        </div>
        <div>
          <img src={img6} alt="offers" width="270px" />
        </div>
      </div>
    </>
  );
};

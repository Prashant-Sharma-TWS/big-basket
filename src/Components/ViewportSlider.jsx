import React, { Component } from "react";
import Slider from "react-slick";
import { ViewportSliderElement } from "../Elements/Viewport";

export class ViewportSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <ViewportSliderElement className="viewport-slider">
        <Slider className="slider" {...settings}>
          <div>
            <img
              src="https://www.bigbasket.com/media/uploads/banner_images/HP_EMF_M_Weekdayblore_460_040322.jpg"
              alt="tax-img" width="180px"
            />
          </div>
          <div>
            <img
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_fom_m_bbpl-staples_460_220322_Bangalore.jpg"
              alt="tax-img" width="180px"
            />
          </div>
          <div>
            <img
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_f_v_m_ugadi_460-250322.jpg"
              alt="tax-img" width="180px"
            />
          </div>
          <div>
            <img
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_b_h_m_Dairy(MilkShake)_460-250322.jpg"
              alt="tax-img" width="180px"
            />
          </div>
          <div>
            <img
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_Happychef_460-250322.jpg"
              alt="tax-img" width="180px"
            />
          </div>
          <div>
            <img
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_Pantryessentials_460-250322.jpg"
              alt="tax-img" width="180px"
            />
          </div>
        </Slider>
      </ViewportSliderElement>
    );
  }
}

export class ViewportBottomSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 3000,
      slidesToShow: 6,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div style={{ width: "85%", margin: "20px auto" }}>
        <Slider {...settings}>
          <div>
            <img
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_emf_190x60_250322.png"
              alt="tax-img" width="180px"
            />
          </div>
          <div>
            <img
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_bbstar_190x60_250322.png"
              alt="tax-img" width="180px"
            />
          </div>
          <div>
            <img
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_precautionary_190x60_250322.png"
              alt="tax-img" width="180px"
            />
          </div>
          <div>
            <img
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_faq_190x60_250322.png"
              alt="tax-img" width="180px"
            />
          </div>
          <div>
            <img
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_combostore_190x60_250322.png"
              alt="tax-img" width="180px"
            />
          </div>
          <div>
            <img
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_dealsoftheweek_190x60_250322.png"
              alt="tax-img" width="180px"
            />
          </div>
        </Slider>
      </div>
    );
  }
}

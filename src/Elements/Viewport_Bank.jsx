import styled from "styled-components";

export const ViewportSliderElement = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`;

export const ViewportBottomElement = styled.div`
  width: 85%;
  margin: 20px auto 0;
  @media screen and (max-width: 870px) {
    width: 80%;
  }
`;

export const OfferSection = styled.section`
  .offer-top-margin {
    width: 85%;
    margin: 30px auto 0;
  }
  h2 {
    width: 85%;
    color: rgb(68, 68, 68);
    text-align: center;
    font-size: 22px;
    font-weight: 500;
    padding: 40px 0 8px;
    margin: 5px auto 15px;
    border-bottom: 1px solid #eaeaea;
  }
  .wrapperer {
    width: 85%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 870px) {
      width: 90%;
    }

    > div {
      width: 273px;
      border: 1px solid #e1e1e1;
      margin-bottom: 10px;
      @media screen and (max-width: 870px) {
        width: 48%;
      }

      > img {
        width: 100%;
      }
    }
  }

  .staples {
    > div {
      width: 15%;
    }

    @media screen and (max-width: 870px) {
      > div {
        width: 48%;
      }
    }
  }

  .wrapperer.fruits-veg {
    > div {
      width: 48%;
    }
    > div:nth-child(2) {
      border: none;
    }

    > .small-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      > div {
        width: 48%;
        border: 1px solid #e1e1e1;
        margin-bottom: 5px;
        > img {
          width: 100%;
        }
      }
    }

    @media screen and (max-width: 870px) {
      > div {
        width: 100%;
      }
    }
  }

  #carouselExampleControls {
    width: 85%;
    margin: 50px auto 0;
    border: 1px solid #e1e1e1;
    @media screen and (max-width: 870px) {
      margin: 50px 30px 0;
    }

    a.carousel-control-prev,
    a.carousel-control-next {
      width: 20px;
      height: 20px;
      top: 45%;
      color: #e1e1e1;
      padding: 15px 10px;
      background-color: #777;
      border: 1px solid #dedede;
      opacity: 0.5;

      :hover {
        opacity: 0.7;
      }
    }

    a.carousel-control-prev {
      left: -15px;
    }
    a.carousel-control-next {
      right: -15px;
    }
    .prev-icon-car {
      border: solid transparent;
    }
  }

  #carouselExampleControls.featured-slide {
    margin: 0 auto;
    @media screen and (max-width: 870px) {
      margin: 0 30px;
    }
  }

  ul.best-sellers {
    width: 85%;
    min-height: 470px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: start;
    // overflow-x: scroll;
    overflow-x: hidden;
    overflow-y: hidden;

    li.best-seller-product {
      min-width: 220px;
      width: 220px;
      max-height: 450px;
      margin: 0 4.5px;
      border: 1px solid #f2f2f2;
      background: #fff;
    }

    .product-display {
      height: 100%;

      .name {
        min-height: 30px !important;
      }

      .price-details {
        min-height: 90px;
      }
    }
  }
`;

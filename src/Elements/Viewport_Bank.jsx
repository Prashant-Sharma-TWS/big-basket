import styled from "styled-components";

export const ViewportSliderElement = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`;

export const OfferSection = styled.section`
  h2 {
    color: rgb(68, 68, 68);
    text-align: center;
    font-size: 22px;
    font-weight: 500;
    padding: 40px 0 8px;
    width: 85%;
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

    > div {
      width: 273px;
      border: 1px solid #e1e1e1;
      @media screen and (max-width: 870px) {
        width: 48%;
      }

      img {
        width: 100%;
      }
    }
  }

  .staples {
    > div {
      width: 15%;
    }
  }
`;

import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  z-index: 100;
  background-color: #fff;

  > div {
    width: 85%;
    margin: auto;
    position: relative;
    > div:nth-child(1) {
      > div {
        width: 100%;
        padding-top: 5px;
        display: flex;
        justify-content: space-between;
        align-items: end;
      }
      > div:nth-child(1) {
        .user,
        .location {
          display: none;
        }
      }
    }

    @media screen and (max-width: 870px) {
      width: 100%;
      background-color: #84c225;

      > div:nth-child(1) {
        flex-direction: column;

        > div:nth-child(1) {
          width: 78%;
          margin-left: auto;
          justify-content: space-between;

          .user,
          .location {
            display: inline-block;
          }
        }

        > div {
          height: 38px;
          justify-content: space-around;
          align-items: center;

          > div {
            margin: 0;
          }
          .user {
            i {
              width: 24.62px;
              height: 22.89px;
              background-position: 89.95121945369027% 89.28184791355511%;
            }
          }
          .location {
            i {
              width: 19.8px;
              height: 25px;
              background-position: 46.31066773595685% 44.12751677852349%;
            }
          }
          .empty-divs {
            display: none;
          }
        }
      }

      .user,
      .location {
        display: inline-block;
      }
    }
  }

  .big-basket-logo {
    i {
      width: 200px;
      height: 65px;
      margin: 12px 0 0;
      display: inline-block;
      background-image: url(https://www.bbassets.com/static/v2530/custPage/build/content/img/bb_logo.png);
      background-repeat: no-repeat;
    }
    @media screen and (max-width: 870px) {
      i {
        width: 25px;
        height: 25px;
        margin: 0;
        display: inline-block;
        background-image: url(https://www.bbassets.com/static/v2530/custPage/build/content/img/bb-icon.png);
        background-size: contain;
        background-repeat: no-repeat;
      }
    }
  }

  .search-bar {
    width: 50%;
    height: 30px;
    position: relative;
    bottom: 10px;

    input {
      width: 100%;
      min-height: 30px;
      padding: 0 12px;
      font-size: 14px;
      line-height: 1.42857;
      color: #222;
      border: 1px solid #888;
      border-radius: 0;
      box-shadow: none;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

      :focus {
        outline: none;
      }
    }
    > button {
      width: 35px;
      height: 30px;
      padding: 4px;
      position: absolute;
      right: 0;
      color: #fff;
      background-color: #84c225;
      border: 1px solid #84c225;

      .search-icon {
        width: 20px;
        height: 20px;
        display: inline-block;
        background-image: url(https://www.bbassets.com/static/v2530/custPage/build/content/img/header.css.svg);
        background-position: 65.2482269503546% 65.72379367720465%;
      }
    }
  }
  .search-bar.small-screen {
    display: none;
  }
  .search-bar.big-screen {
    display: flex;
  }

  @media screen and (max-width: 870px) {
    .search-bar.small-screen {
      display: flex;
      bottom: 0;

      > button {
        background-color: transparent;
        border: none;
        .search-icon {
          background-position: 68.08510638297872% 69.05158069883528%;
        }
      }
    }
    .search-bar.big-screen {
      display: none;
    }
  }

  .basket {
    width: 140px;
    height: 58px;
    position: relative;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    background: #f2f2f2;
    border-radius: 5px;
    border-color: #f2f2f2;
    cursor: pointer;

    span {
      .cart-count {
        display: none;
      }
    }
    @media screen and (max-width: 870px) {
      span {
        position: relative;
        .cart-count {
          display: inline-block;
          border-radius: 25px;
          padding: 1px 3px 2px;
          position: absolute;
          top: -2px;
          margin-left: 8px;
          min-width: 16px;
          min-height: 16px;
          font-size: 13px;
          background: #ec1c24;
          color: #fff;
        }
      }
    }

    .basket-image {
      width: 39.38px;
      height: 28px;
      display: inline-block;
      background-image: url(https://www.bbassets.com/static/v2530/custPage/build/content/img/header.css.svg);
      background-position: 2.9170780597545356% 2.0236087689713322%;
    }

    .my-basket,
    .cart-value {
      width: 100%;
      display: inline-block;
      text-align: right;
      font-size: 12px;
      font-weight: 600;
      color: #4d4d4d;
    }

    .cart-value span {
      margin-left: 5px;
    }

    @media screen and (max-width: 870px) {
      background: transparent;
      .basket-image {
        width: 27.55px;
        height: 25px;
        background-position: 8.602708511158488% 6.7114093959731544%;
      }
      .my-basket,
      .cart-value {
        display: none;
      }
    }
  }

  ul.nav-top {
    @media screen and (max-width: 870px) {
      display: none;

      .user,
      .location {
        display: none;
      }
    }

    width: 100%;
    min-height: 30px;
    margin: auto;
    display: flex;
    justify-content: end;
    align-items: center;
    position: absolute;
    top: 0;
    font-size: 12px;
    color: #4a4a4a;
  }

  .telephone,
  .location,
  .user {
    height: 28px;
    margin: 0 10px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    > i {
      margin-right: 3px;
    }
  }

  .telephone {
    > i {
      width: 15px;
      height: 15px;
      display: inline-block;
      background-image: url(https://www.bbassets.com/static/v2530/custPage/build/content/img/header.css.svg);
      background-position: 21.971830985915492% 19.801980198019802%;
    }
  }

  .location {
    > i {
      width: 11.34px;
      height: 15px;
      display: inline-block;
      background-image: url(https://www.bbassets.com/static/v2530/custPage/build/content/img/header.css.svg);
      background-position: 42.4572442588943% 38.44884488448845%;
    }
  }

  .user {
    position: relative;

    > i {
      width: 16.85px;
      height: 14.97px;
      display: inline-block;
      background-image: url(https://www.bbassets.com/static/v2530/custPage/build/content/img/header.css.svg);
      background-position: 80.77331923961296% 79.36961843872733%;
    }

    :hover {
      background-color: #84c225;
      .arrow-down {
        top: 0;
        transform: rotate(-135deg);
      }

      .user-option {
        display: flex;
      }

      @media screen and (max-width: 870px) {
        .user-option {
          min-width: 100vw;
          top: 30px;
          left: -234%;
          z-index: 500;
        }
      }
    }

    .user-option {
      min-width: 200px;
      display: none;
      flex-direction: column;
      position: absolute;
      top: 27px;
      right: 0;
      background-color: #fff;
      border: 1px solid rgba(0, 0, 0, 0.15);
      box-shadow: 0 6px 12px rgb(0 0 0 / 18%);

      li {
        padding: 5px 10px;
        color: #444;
        font-weight: 400;
        line-height: 1.42857;
        text-align: left;
        border-bottom: 1px dashed #dedede;
        transition: all 0.3s ease;
      }
    }
  }
`;

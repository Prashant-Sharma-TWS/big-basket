import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginRequest, loginSuccess } from "../../Redux/Auth/auth.actions";
import { useLocation, useNavigate } from "react-router-dom";
import { SigninSection } from "../../Elements/NavbarElement";
import axios from "axios";

export const SignIn = ({ isSigning, setIsSigning }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [otp, setotp] = useState(false);
  const [currLoginWith, setCurrLoginWith] = useState(true);
  const [userDetails, setUserDetails] = useState({
    email: "",
    number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleContinue = () => {
    // check if details are correct
    if (userDetails.number && userDetails.number.length === 10) {
      // then number is correct send to backend and get otp
      axios
        .post("http://localhost:8000/users/signin", userDetails)
        .then((res) =>
          res.data.otp === "Enter last four digit of number"
            ? setotp(true)
            : alert(`Enter details are invalid.`)
        );
    }
    if (userDetails.email) {
      // then send email to backend validate it and get otp
      axios
        .post("http://localhost:8000/users/signin", userDetails)
        .then((res) =>
          res.data.otp === "Enter last four digit of number"
            ? setotp(true)
            : alert(`Enter details are invalid.`)
        );
    }
  };

  return (
    <SigninSection>
      <div className={isSigning ? "sign-in-show" : "sign-in-hide"}>
        <div className="form-container">
          <div
            className="close-modal"
            onClick={() => {
              setIsSigning(!isSigning);
              setUserDetails({ email: "", number: "", otp: "" });
            }}
          >
            <span></span>
            <span></span>
          </div>
          <h6>LOGIN/SIGN UP</h6>
          <div>
            <input
              type="text"
              name={currLoginWith ? "number" : "email"}
              placeholder={
                currLoginWith
                  ? "Enter Mobile Number (10-digit)"
                  : "Enter Email Address"
              }
              value={currLoginWith ? userDetails.number : userDetails.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <button
              className="login-with-email"
              onClick={() => {
                setCurrLoginWith(!currLoginWith);
                userDetails.number = "";
                userDetails.email = "";
              }}
            >
              {currLoginWith
                ? "Login with Email Address"
                : "Login with Mobile Number"}
            </button>
            <button className="continue" onClick={handleContinue}>
              Continue
            </button>
            <p>
              By continuing, I accept TCP-bigbasket's
              <b> Terms and Conditions</b> and <b>Privacy Policy</b>.
            </p>
          </div>
        </div>
      </div>
    </SigninSection>
  );
};

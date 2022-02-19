import { Button, TextField } from "@mui/material";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import React, { useEffect, useState } from "react";
import asset_auth from "./assets/asset_auth.svg";
import "./Authentication.css";
import { auth } from "./firebase";

function Authentication() {
  const [type, setType] = useState(0);
  const [textValue, setTextValue] = useState("");
  const [btnState, setBtnState] = useState(false);
  const [res, setRes] = useState(null);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      document.getElementById("logIn"),
      {
        size: "invisible",
        callback: (response) => {
          console.log(response);
        },
      },
      auth
    );
  }, []);

  const letsGo = () => {
    if (textValue.length === 10) {
      setBtnState(true);
      setError(false);
      signInWithPhoneNumber(auth, `+91${textValue}`, window.recaptchaVerifier)
        .then((res) => {
          setTextValue("");
          setType(1);
          setBtnState(false);
          setRes(res);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      setError(true);
      setErrorMessage("Invalid Number");
    }
  };

  const verifyPhone = () => {
    if (res) {
      res.confirm(textValue).catch((e) => {
        setError(true);
        setErrorMessage("Invalid Code");
        console.log(e);
      });
    }
  };

  return (
    <div className="auth_main container-fluid pt-5 vw-100 vh-100">
      <div className="auth_con ">
        <h1 className="text-center logo">Video Booth</h1>
        <hr className="w-100" />
        <img src={asset_auth} alt="login" className="mt-2 w-100" />
        <TextField
          value={textValue}
          label={type === 0 ? "Enter Phone" : "Enter Verification Code"}
          className="mt-3 w-100"
          onChange={(e) => setTextValue(e.target.value)}
          error={error}
          helperText={error ? errorMessage : ""}
        />
        <Button
          className="mt-3 w-50 p-2"
          id="logIn"
          onClick={type === 0 ? letsGo : verifyPhone}
          disabled={btnState}
        >
          GO!
        </Button>
      </div>
    </div>
  );
}

export default Authentication;

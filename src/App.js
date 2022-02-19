import CallIcon from "@mui/icons-material/Call";
import CallEndIcon from "@mui/icons-material/CallEnd";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import { Button } from "@mui/material";
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useCallback, useEffect, useState } from "react";
import {
  Button as BButton,
  Form,
  InputGroup,
  Modal,
  Spinner,
} from "react-bootstrap";
import { io } from "socket.io-client";

import adapter from "webrtc-adapter";
import Authentication from "./Authentication";

import { auth } from "./firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import Home from "./Home";

function App() {
  const [appUser, setAppUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setAppUser(user);
    });
  }, []);

  return (
    <div className="app">
      {appUser ? <Home user={appUser} /> : <Authentication />}
    </div>
  );
}

export default App;

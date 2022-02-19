import { Divider, TextField } from "@mui/material";
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalDialog,
  ModalFooter,
} from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import { auth, fireStore } from "./firebase";
import "./Home.css";
import asset_get_started from "./assets/asset_get_started.svg";

function Home({ user }) {
  const [currentNav, setCurrentNav] = useState(0);
  //   useEffect(() => {
  //     async function checkEntry() {
  //       let check = (
  //         await getDoc(doc(fireStore, "users", user.phoneNumber.substring(3)))
  //       ).exists();
  //       console.log(check);
  //     }
  //     checkEntry();
  //   }, []);

  const isUsernameAvailable = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="home_main vh-100 vw-100 ">
      <Modal show centered>
        <ModalHeader>
          <h1>Profile SetUp</h1>
        </ModalHeader>
        <ModalBody>
          <img
            src={asset_get_started}
            alt="getStarted"
            className="w-100 "
            style={{
              maxHeight: "200px",
            }}
          />
          <TextField
            label="Create UserName"
            className="w-100 my-4"
            onChange={isUsernameAvailable}
          />
        </ModalBody>
        <ModalFooter>
          <Button>GO!</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Home;

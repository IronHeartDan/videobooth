import React from "react";

function callScreen() {
  return (
    <div>
      <video className="bigVideo" autoPlay playsInline></video>
      <video className="smallVideo" autoPlay playsInline></video>
    </div>
  );
}

export default callScreen;

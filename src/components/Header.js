import React from "react";

const Header = () => {
  return (
    <header
      id="home"
      style={{ height: window.innerHeight - 140, display: "block" }}
    >
      <div className="row aligner" style={{ height: "100%" }}>
        <div className="col-md-12">
          <div>
            <img
              src={require("../images/fadedman.png")}
              width="250px"
              alt="Logo"
            />
            <br />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

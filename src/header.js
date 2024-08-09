import React from "react";
import Logo from "./img/Google_Play_Books_icon_(2023).svg";

import "../src/sass/style.css";

const Header = () => {
  return (
    <>
      <div>
        <a
          className="icon"
          href="https://developers.google.com/books/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="github-icon"
            style={{
              position: "absolute",
              right: "5px",
              top: "5px",
              height: "3rem",
              width: "3rem",
              padding: "3px",
              cursor: "pointer",
            }}
            src={Logo}
            alt="github-icon"
          />
        </a>
        <strong>
          <h2
            className="heading-name"
            style={{
              background: "none",
              // borderRadius: "1rem",
              marginBottom: 50,
              color: "#333",
              textAlign: "center",
              // fontWeight: "bold", //No need of bold because headings are itself bold
              textShadow: "2px 2px 3px #b0b0b0",
            }}
          >
            All Books Accessible At a Finger Tip
          </h2>
        </strong>
      </div>
    </>
  );
};

export default Header;

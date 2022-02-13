import React from "react";
import { css } from "@emotion/css";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import { getImageURL } from "helpers/getImageURL";

export default function Logo() {
  return (
    <div>
      <Link
        className={css`
          text-decoration: none;
        `}
        to="/portfolio"
      >
        {/* <span className={logoStyle}>CG</span> */}
        <Avatar
          alt="Clemence Goh"
          src={getImageURL("closeup_me.jpg")}
          sx={{
            padding: "0.25rem",
            borderRadius: "50%",
            marginLeft: "1rem",

            ":hover": {
              boxShadow: "0 0 0 0 rgba(var(--palette-0-rgb), 0.1)",
              transform: "scale(1)",
              animation: "pulse 2s infinite",
            },

            "> img": {
              width: "125%",
              height: "125%",
            },
          }}
        ></Avatar>
      </Link>
    </div>
  );
}

const logoStyle = css`
  background: -webkit-linear-gradient(
    top left,
    var(--palette-0),
    var(--negative),
    var(--palette-1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  border-radius: 50%;
  padding: 0.25rem;

  font-size: 2.5rem;
  font-weight: 700;

  box-shadow: none;

  &:hover {
    box-shadow: 0 0 0 0 rgba(var(--palette-0-rgb), 0.1);
    transform: scale(1);
    animation: pulse 2s infinite;
  }
`;

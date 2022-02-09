import { css } from "@emotion/css";
import React from "react";

type Props = {};

export default function LandingPage({}: Props) {
  return (
    <div
      className={css`
        height: 20vh;
        background-color: lightblue;
        color: white;
      `}
    >
      Landing page
    </div>
  );
}

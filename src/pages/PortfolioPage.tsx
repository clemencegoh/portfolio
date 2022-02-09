import { css } from "@emotion/css";
import React from "react";

type Props = {};

export default function PortfolioPage({}: Props) {
  return (
    <div
      className={css`
        height: 20vh;
        background-color: lightgreen;
        color: white;
      `}
    >
      portfolio page
    </div>
  );
}

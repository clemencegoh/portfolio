import { css } from "@emotion/css";
import React from "react";

type Props = {};

export default function AboutPage({}: Props) {
  return (
    <div
      className={css`
        height: 20vh;
        background-color: pink;
        color: white;
      `}
    >
      About page
    </div>
  );
}

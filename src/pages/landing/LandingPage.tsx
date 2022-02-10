import { css } from "@emotion/css";
import React from "react";

type Props = {};

export default function LandingPage({}: Props) {
  const mobileContent = (
    <section
      className={css`
        @media screen and (max-width: 600px) {
          display: inline flex;
        }
        display: none;
      `}
    ></section>
  );

  const desktopContent = (
    <section
      className={css`
        @media screen and (max-width: 600px) {
          display: none;
        }
        display: inline flex;
      `}
    ></section>
  );

  return (
    <div
      className={css`
        height: 100vh;
      `}
    >
      {mobileContent}
      {desktopContent}
    </div>
  );
}

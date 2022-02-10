import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button, Typography } from "@mui/material";
import { css } from "@emotion/css";
import { Link } from "react-router-dom";

type Props = {};

export default function Footer({}: Props) {
  return (
    <section
      className={css`
        display: flex;
        justify-content: space-between;
        padding: 1rem;

        color: var(--text-main);
        background-color: var(--bg-main);

        @media screen and (max-width: 600px) {
          flex-direction: column;
        }
      `}
    >
      <Typography
        variant="button"
        className={css`
          display: flex;
          justify-content: start;
          align-items: center;
          color: var(--labels);
          > * {
            margin-right: 0.5rem;
          }
        `}
      >
        <CopyrightIcon />
        2022 - Clemence Goh
      </Typography>

      <div>
        <a
          className={removeTextDecoration}
          href="https://github.com/clemencegoh"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Button
            sx={{
              marginRight: "1rem",
            }}
            variant="text"
            color="inherit"
            startIcon={<GitHubIcon />}
          >
            Github
          </Button>
        </a>

        <a
          className={removeTextDecoration}
          href="https://www.linkedin.com/in/clemencegoh/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Button variant="text" color="inherit" startIcon={<LinkedInIcon />}>
            LinkedIn
          </Button>
        </a>
      </div>
    </section>
  );
}

const removeTextDecoration = css`
  text-decoration: none;
  color: inherit;
`;

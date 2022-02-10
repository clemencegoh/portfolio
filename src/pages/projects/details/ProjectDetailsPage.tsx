import React from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "data/projects";
import { Container, Fade, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { css } from "@emotion/css";
import IPhoneCase from "./IPhoneCase";

type Props = {};

export default function ProjectDetailsPage({}: Props) {
  const { name } = useParams();
  const data = projectsData.find((item) => item.innerName === name);

  return (
    <Container>
      <section
        id="teaser"
        className={css`
          display: flex;
          flex-flow: row;
          justify-content: space-around;
          color: var(--text-main);

          @media screen and (max-width: 600px) {
            flex-flow: column-reverse;
          }
        `}
      >
        <Box
          sx={{
            marginRight: "1rem",
            borderRadius: "1rem",
          }}
          width="100%"
          height="40rem"
          display="flex"
          flex="1"
          justifyContent="center"
        >
          {data?.tags.includes("mobile") ? (
            <IPhoneCase>
              <img
                src={`${process.env.PUBLIC_URL}/images/${data?.teaserSrc}`}
                alt={`teaser for ${data?.name}`}
                className={css`
                  object-fit: cover;
                  width: 100%;
                  height: 100%;
                `}
              />
            </IPhoneCase>
          ) : (
            <img
              src={`${process.env.PUBLIC_URL}/images/${data?.teaserSrc}`}
              alt={`teaser for ${data?.name}`}
              className={css`
                object-fit: contain;
              `}
            />
          )}
        </Box>
        <article
          className={css`
            flex: 1;
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;

            @media screen and (max-width: 600px) {
              margin: 1rem;
            }
          `}
        >
          <Typography variant="h2" fontWeight={600}>
            {data?.name}
          </Typography>
          <Typography variant="subtitle1" textAlign="center">
            {data?.description}
          </Typography>
        </article>
      </section>
      <section
        className={css`
          height: 200vh;
        `}
      ></section>
    </Container>
  );
}

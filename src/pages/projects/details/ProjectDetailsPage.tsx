import React from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "data/projects";
import { Button, Card, Container, Fade, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { css } from "@emotion/css";
import IPhoneCase from "./IPhoneCase";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

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
          margin-top: 2rem;

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
              margin-bottom: 2rem;
            }
          `}
        >
          <Typography variant="h2" fontWeight={600}>
            {data?.name}
          </Typography>
          <Typography variant="subtitle1" textAlign="center">
            {data?.shortDescription}
          </Typography>
        </article>
      </section>
      <section
        id="preview"
        className={css`
          display: flex;
          flex-flow: row;
          justify-content: space-around;
          color: var(--text-main);
          margin-top: 2rem;

          @media screen and (max-width: 600px) {
            flex-flow: column;
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
                src={`${process.env.PUBLIC_URL}/images/${data?.previewSrc}`}
                alt={`preview for ${data?.name}`}
                className={css`
                  object-fit: cover;
                  width: 100%;
                  height: 100%;
                `}
              />
            </IPhoneCase>
          ) : (
            <img
              src={`${process.env.PUBLIC_URL}/images/${data?.previewSrc}`}
              alt={`preview for ${data?.name}`}
              className={css`
                object-fit: contain;
              `}
            />
          )}
        </Box>

        <article
          className={css`
            display: flex;
            flex-direction: column;
            flex: 1;
          `}
        >
          <Typography>{data?.description}</Typography>
          <Typography>Completion Date</Typography>
          <Typography>{data?.completionDate ?? "Work in progress"}</Typography>
          <Typography>Tech Stack</Typography>
          <Typography>{data?.tags.join(", ")}</Typography>
          <Button endIcon={<ChevronRightIcon />}>Check it out</Button>
        </article>
      </section>
      <section id="other-images">
        <Grid>
          {data?.otherSrc.map((item, index) => (
            <img
              alt={`sample ${index}`}
              src={`${process.env.PUBLIC_URL}/images/${item}`}
            />
          ))}
        </Grid>
      </section>
    </Container>
  );
}

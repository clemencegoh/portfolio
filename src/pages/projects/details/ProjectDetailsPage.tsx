import React from "react";
import { Link, useParams } from "react-router-dom";
import { projectsData } from "data/projects";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Fade,
  Grid,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import { css } from "@emotion/css";
import IPhoneCase from "./IPhoneCase";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import GridViewIcon from "@mui/icons-material/GridView";
import { ThemedIconButton, ThemedLink } from "components/ThemedComponents";

type Props = {};

export default function ProjectDetailsPage({}: Props) {
  const { name } = useParams();
  const dataIndex = projectsData.findIndex((item) => item.innerName === name);
  const data = dataIndex !== -1 ? projectsData[dataIndex] : null;

  if (!data) {
    return <></>;
  }

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
          margin: 2rem 0;

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
            flex: 1;
            padding-top: 3rem;
          `}
        >
          <Typography variant="body1" paragraph>
            {data?.description}
          </Typography>
          <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
            Completion Date
          </Typography>
          <Typography paragraph>
            {data?.completionDate ?? "Work in progress"}
          </Typography>
          <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
            Tech Stack
          </Typography>
          <Typography paragraph>{data?.tags.join(", ")}</Typography>
          <Button
            sx={{ marginTop: "2rem" }}
            size="large"
            variant="contained"
            endIcon={<ChevronRightIcon />}
          >
            Check it out
          </Button>
        </article>
      </section>
      <section id="other-images">
        <Grid container spacing={2}>
          {data?.otherSrc.map((item, index) => (
            <Grid item xs={12} md={6}>
              <img
                className={css`
                  width: 100%;
                `}
                alt={`sample ${index}`}
                src={`${process.env.PUBLIC_URL}/images/${item}`}
              />
            </Grid>
          ))}
        </Grid>
      </section>
      <section
        id="project-navigation"
        className={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <div
          id="previous-project"
          className={css`
            flex: 1;
            @media screen and (max-width: 600px) {
              display: none;
            }
          `}
        >
          {dataIndex - 1 > -1 ? (
            <Button variant="text" sx={{ textTransform: "none" }}>
              <ThemedLink
                to={`/portfolio/projects/${
                  projectsData[dataIndex - 1].innerName
                }`}
              >
                <div
                  className={css`
                    display: flex;
                    align-items: center;
                    text-align: left;
                  `}
                >
                  <ChevronLeftIcon sx={{ marginRight: "1rem" }} />
                  <div>
                    <Typography
                      sx={{ marginBottom: "-0.5rem" }}
                      gutterBottom
                      variant="overline"
                      component="div"
                    >
                      PREVIOUS PROJECT
                    </Typography>
                    <Typography variant="h5" component="div">
                      {projectsData[dataIndex - 1]?.name}
                    </Typography>
                  </div>
                </div>
              </ThemedLink>
            </Button>
          ) : (
            ""
          )}
        </div>
        <div
          id="project-main"
          className={css`
            flex: 1;
            align-self: center;
            text-align: center;
            @media screen and (max-width: 600px) {
              display: none;
            }
          `}
        >
          <ThemedIconButton>
            <ThemedLink to={`/portfolio/projects`}>
              <GridViewIcon />
            </ThemedLink>
          </ThemedIconButton>
        </div>
        <div
          id="next-project"
          className={css`
            flex: 1;
            display: flex;
            justify-content: right;
          `}
        >
          {dataIndex + 1 < projectsData.length ? (
            <Button variant="text" sx={{ textTransform: "none" }}>
              <ThemedLink
                to={`/portfolio/projects/${
                  projectsData[dataIndex + 1].innerName
                }`}
              >
                <div
                  className={css`
                    display: flex;
                    align-items: center;
                    text-align: right;
                  `}
                >
                  <div>
                    <Typography
                      sx={{ marginBottom: "-0.5rem" }}
                      gutterBottom
                      variant="overline"
                      component="div"
                    >
                      NEXT PROJECT
                    </Typography>
                    <Typography variant="h5" component="div">
                      {projectsData[dataIndex + 1]?.name}
                    </Typography>
                  </div>

                  <ChevronRightIcon sx={{ marginLeft: "1rem" }} />
                </div>
              </ThemedLink>
            </Button>
          ) : (
            ""
          )}
        </div>
      </section>
    </Container>
  );
}

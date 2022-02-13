import { css } from "@emotion/css";
import {
  Avatar,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { getImageURL } from "helpers/getImageURL";
import React from "react";

type Props = {};

type workExperience = {
  role: string;
  name: string;
  year: string;
};

export default function LandingPage({}: Props) {
  const workData: workExperience[] = [
    {
      role: "Software Engineer intern",
      name: "Grab",
      year: "2017 & 2018",
    },
    {
      role: "Full Stack developer",
      name: "DBS",
      year: "2019 - 2021",
    },
    {
      role: "Full Stack Developer",
      name: "iLex",
      year: "2021",
    },
    {
      role: "Software Engineer",
      name: "Facebook (Meta)",
      year: "2021 - present",
    },
  ];

  return (
    <Container
      sx={{
        color: "var(--text-main)",
        overflowX: "hidden",
      }}
    >
      <section
        id="introduction"
        className={css`
          display: flex;
          flex-flow: column;
          justify-content: center;
          margin: 2rem 0;
          text-align: center;

          @media screen and (max-width: 600px) {
          }
        `}
      >
        <Avatar
          alt="Clemence Profile Pic"
          src={getImageURL("closeup_me.jpg")}
          sx={{
            margin: "2rem auto 0",
            height: "10rem",
            width: "10rem",
          }}
        />
        <Typography variant="h3" component="h1" margin="auto">
          Clemence Goh
        </Typography>
        <Typography variant="h5" margin="auto" component="h2">
          Software engineer | Web developer
        </Typography>
      </section>
      <section
        id="background-and-experience"
        className={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <Stack
          spacing={-16}
          sx={{
            margin: "4rem 0 2rem",
            width: "80%",
            alignItem: "flex-start",
            "@media screen and (max-width: 600px)": {
              width: "100%",
            },
          }}
        >
          <img
            alt="academic"
            src={getImageURL("grad-photo.jpg")}
            className={css`
              height: 40vh;
              margin: auto;
            `}
          />

          <Card
            sx={{
              width: "50vw",
              maxWidth: "32rem",
              backgroundColor: "var(--bg-card)",
              color: "var(--text-main)",
              "@media screen and (max-width: 600px)": {
                width: "74vw",
              },
            }}
          >
            <CardContent>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                My Academic Background
              </Typography>
              <Typography paragraph>
                Singapore University of Technology and Design, Class of 2019
              </Typography>
              <Typography>
                Graduated with an Honours Degree in Information Systems, with a
                major in Artificial Intelligence
              </Typography>
            </CardContent>
          </Card>
        </Stack>

        <Stack
          spacing={-12}
          sx={{
            margin: "4rem 0 2rem",
            alignItems: "flex-end",
            "@media screen and (max-width: 600px)": {
              width: "100%",
            },
          }}
        >
          <img
            alt="work-pictures"
            src={getImageURL("grab-intern-me.jpg")}
            className={css`
              height: 40vh;
              margin: auto;
            `}
          />

          <Card
            sx={{
              width: "50vw",
              maxWidth: "40rem",
              backgroundColor: "var(--bg-card)",
              color: "var(--text-main)",
              "@media screen and (max-width: 600px)": {
                width: "74vw",
              },
            }}
          >
            <CardContent>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                My Work Experience
              </Typography>
              <Grid container spacing={2}>
                {workData.map((item) => (
                  <>
                    <Grid item xs={4} display="flex" alignItems="center">
                      <Typography>{item.role}</Typography>
                    </Grid>
                    <Grid item xs={4} display="flex" alignItems="center">
                      <Typography fontWeight="bold">{item.name}</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      display="flex"
                      alignItems="center"
                      justifyContent="flex-end"
                    >
                      <Typography textAlign="end">{item.year}</Typography>
                    </Grid>
                  </>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Stack>
      </section>
      {/**
       * todo: add some achievements when I finally do something noteworthy with my life
       **/}
      <section id="getting-around">
        <Typography>
          Get to know me better in About, find out more about my projects here!
        </Typography>
      </section>
    </Container>
  );
}

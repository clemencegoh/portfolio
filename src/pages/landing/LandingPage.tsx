import { css } from "@emotion/css";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import NavigateButton from "components/navigation/NavigateButton";
import { ThemedLink } from "components/ThemedComponents";
import { getImageURL } from "helpers/getImageURL";

type workExperience = {
  role: string;
  name: string;
  year: string;
};

export default function LandingPage() {
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
      <section id="background-and-experience">
        <Grid container>
          <Grid item xs={12} md={6}>
            <Stack
              spacing={-16}
              sx={{
                margin: "4rem 0 2rem",
                alignItem: "flex-start",
              }}
            >
              <img
                alt="academic"
                src={getImageURL("grad-photo.jpg")}
                className={css`
                  height: 40vh;
                  margin-left: auto;
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
                    Graduated with an Honours Degree in Information Systems,
                    with a major in Artificial Intelligence
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
          {/**
           * Some placeholder space in case I ever want to do a writeup about myself?
           */}
          <Grid item xs={12} md={6}></Grid>
          <Grid item xs={12} md={4}></Grid>
          <Grid item xs={12} md={8}>
            <Stack
              spacing={-12}
              sx={{
                margin: "4rem 0 2rem",
                alignItems: "flex-end",
              }}
            >
              <img
                alt="work-pictures"
                src={getImageURL("grab-intern-me.jpg")}
                className={css`
                  height: 40vh;
                  margin-right: auto;
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
          </Grid>
        </Grid>
      </section>
      {/**
       * todo: add some achievements when I finally do something noteworthy with my life
       **/}
      <section id="getting-around">
        <NavigateButton
          link="/portfolio/about"
          overText="Check it out!"
          underText="My interests and hobbies"
        />
      </section>
    </Container>
  );
}

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
import NavigateButton from "components/navigation/NavigateButton";
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
      maxWidth="xl"
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
          <Grid item xs={12} md={7} lg={5}>
            <Stack
              spacing={-16}
              sx={{
                margin: "4rem 0 2rem",
                alignItem: "flex-start",
                width: "100%",
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
          <Grid
            item
            xs={12}
            md={5}
            lg={7}
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
          >
            <Card
              sx={{
                color: "var(--text-main)",
                backgroundColor: "var(--bg-card)",
                width: "100%",
                margin: "0 2rem 1rem 2rem",
                "@media screen and (max-width: 600px)": {
                  margin: "0",
                },
              }}
            >
              <CardContent>
                <Typography paragraph>
                  My engineering journey began here!
                </Typography>
                <Typography paragraph>
                  I studied general engineering for 1 year before selecting
                  Information Systems as my course instead of my initial choice
                  of Electrical Engineering
                </Typography>
                <Typography paragraph>
                  Being a young school, the choice of specialisation in SUTD was
                  limited to either Data Science, Big Data, or Security. It
                  wasn't until a project involving building a Decentralised
                  Application using python and flask that i discovered my
                  passion for web development.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
          >
            <Card
              sx={{
                color: "var(--text-main)",
                backgroundColor: "var(--bg-card)",
                width: "100%",
                marginRight: "2rem",
                "@media screen and (max-width: 600px)": {
                  margin: "1rem 0 0",
                },
              }}
            >
              <CardContent>
                <Typography paragraph>
                  I started my professional career as an intern at Grab, lucky
                  to get into the most amazing team using modern languages like
                  Golang and ReactJS to develop internal tools with an emphasis
                  on performance and reliability.
                </Typography>
                <Typography paragraph>
                  I then moved on to full-stack development - an essential skill
                  to touch all aspects of the booming fintech industry.
                </Typography>
                <Typography paragraph>
                  My interest pivoted towards frontend technologies gradually as
                  it became apparent that frontend development occurs at a much
                  faster pace since the logic involved is usually less complex.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
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
                  width: "40vw",
                  maxWidth: "36rem",
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
